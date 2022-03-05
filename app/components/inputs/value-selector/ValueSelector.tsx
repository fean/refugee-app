import * as React from "react"
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  StyleSheet,
  LayoutRectangle,
  TouchableOpacity,
} from "react-native"

import { color } from "../../../theme"
import { Typography } from "../../base/typography/Typography"
import { shadows } from "../../../theme/shadows"

export interface Value {
  value: string
  label?: string
}

interface ValueSelectorProps {
  style?: StyleProp<ViewStyle>
  values: Value[]
  currentValue?: string
  onChange?: (value?: string) => void
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: color.palette.control,
    borderRadius: 5,
    flex: 1,
    height: 32,
    overflow: "hidden",
  },
  choice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 32,
  },
  choiceText: {
    flex: 1,
    flexGrow: 1,
  },
  selectedBox: {
    backgroundColor: color.palette.white,
    borderRadius: 5,
    height: 28,
    left: 0,
    position: "absolute",
    top: 2,
    width: 30,
    ...shadows.input,
  },
  valueContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

export const ValueSelector: React.FC<ValueSelectorProps> = ({
  style: styleOverride,
  currentValue,
  values,
  onChange,
}) => {
  const [boxWidth, setBoxWidth] = React.useState(1)
  const xAnim = React.useRef(new Animated.Value(2))
  const choiceLayouts = React.useRef<LayoutRectangle[]>([])

  const calculatePosition = React.useCallback(() => {
    const valueIndex = currentValue ? values.findIndex((entry) => entry.value === currentValue) : 0

    const {
      current: { [valueIndex]: targetLayout },
    } = choiceLayouts
    if (targetLayout) {
      Animated.spring(xAnim.current, {
        toValue: targetLayout.x + 2,
        useNativeDriver: true,
      }).start()
      setBoxWidth(Math.round(targetLayout.width) - 4)
    }
  }, [currentValue, values])

  React.useEffect(calculatePosition, [currentValue])

  return (
    <View style={[styles.bar, styleOverride]}>
      <Animated.View
        style={[
          styles.selectedBox,
          { width: boxWidth, transform: [{ translateX: xAnim.current }] },
        ]}
      />

      <View style={styles.valueContainer}>
        {values.map(({ value, label }, index) => (
          <TouchableOpacity
            key={value}
            style={styles.choice}
            onLayout={(event) => {
              choiceLayouts.current[index] = event.nativeEvent.layout
              calculatePosition()
            }}
            onPress={() => onChange && onChange(value)}
          >
            <Typography variant="text" align="center" style={styles.choiceText}>
              {label ?? value}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
