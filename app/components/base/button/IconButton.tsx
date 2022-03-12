import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"

import { borderRadius, color } from "../../../theme"

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
    borderRadius: borderRadius.huge,
    height: 24,
    justifyContent: "center",
    width: 24,
  },
})

export const IconButton: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  style: styleOverride,
  onPress,
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.base, styleOverride]}
    onPress={onPress}
    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
  >
    {icon}
  </TouchableOpacity>
)
