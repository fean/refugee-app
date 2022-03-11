import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { borderRadius, color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  option: "1" | "2" | "3" | "4" | "complete"
}

const styles = StyleSheet.create({
  number: {
    alignItems: "center",
    borderRadius: borderRadius.huge,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
})

export const Number: React.FC<PanelProps> = ({ style: styleOverride, option }) => {
  const colorOverride = React.useMemo(
    () => ({
      backgroundColor: option !== "complete" ? color.palette.europeShade : color.palette.europe,
    }),
    [option],
  )

  return (
    <View style={[styles.number, colorOverride, styleOverride]}>
      {option !== "complete" ? (
        <Typography variant="header" color="europe">
          {option}
        </Typography>
      ) : (
        <Icon name="checkmark-outline" size={24} color={color.palette.white} />
      )}
    </View>
  )
}
