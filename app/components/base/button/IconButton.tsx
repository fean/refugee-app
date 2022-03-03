import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity } from "react-native"

import { color } from "../../../theme"

interface SimpleButtonProps {
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  icon?: React.ReactNode
  onPress?: () => void
}

const BUTTONBASE: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.palette.europeShade,
  borderRadius: 12,
  width: 24,
  height: 24,
}

export const IconButton: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  style: styleOverride,
  onPress,
}) => (
  <TouchableOpacity disabled={disabled} style={[BUTTONBASE, styleOverride]} onPress={onPress}>
    {icon}
  </TouchableOpacity>
)
