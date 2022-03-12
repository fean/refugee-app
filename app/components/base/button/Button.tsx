import * as React from "react"
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native"

import { borderRadius, color } from "../../../theme"
import { translate } from "../../../i18n"

import { Typography } from "../typography/Typography"

interface SimpleButtonProps {
  style?: StyleProp<ViewStyle>
  icon?: React.ReactNode
  text?: string
  tx?: string
  disabled?: boolean
  onPress?: () => void
}

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.small,
    height: 48,
  },
  icon: {
    marginEnd: 8,
  },
  inner: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
})

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: ((props) => (
    <TouchableHighlight activeOpacity={0.9} underlayColor={color.palette.europeShade} {...props} />
  )) as any,
})

export const Button: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  text,
  tx,
  style: styleOverride,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)
  const colorStyles = React.useMemo(
    () => ({
      backgroundColor: disabled ? color.palette.europeDisabled : color.palette.europe,
      width: icon && !btnText ? 32 : undefined,
    }),
    [disabled, icon, text],
  )
  const textColor = disabled ? "disabled" : "white"

  return (
    <Touchable
      disabled={disabled}
      style={[styles.base, colorStyles, styleOverride]}
      onPress={onPress}
    >
      <View style={styles.inner}>
        {icon && <View style={text && styles.icon}>{icon}</View>}
        {btnText && (
          <Typography variant="button" color={textColor}>
            {btnText}
          </Typography>
        )}
      </View>
    </Touchable>
  )
}
