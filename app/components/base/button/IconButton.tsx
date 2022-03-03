import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"

import { color } from "../../../theme"

interface SimpleButtonProps {
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  icon?: React.ReactNode
  onPress?: () => void
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: color.palette.europeShade,
    borderRadius: 16,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
})

export const IconButton: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  style: styleOverride,
  onPress,
}) => (
  <TouchableOpacity disabled={disabled} style={[styles.base, styleOverride]} onPress={onPress}>
    {icon}
  </TouchableOpacity>
)
