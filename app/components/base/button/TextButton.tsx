import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, TextStyle } from "react-native"

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

const BUTTONBASE: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: 5,
  height: 32,
}

const BUTTONTEXT: TextStyle = {
  marginStart: 12,
}

export const TextButton: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  text,
  tx,
  style: styleOverride,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)
  const textColor = disabled ? "disabled" : "text"

  return (
    <TouchableOpacity disabled={disabled} style={[BUTTONBASE, styleOverride]} onPress={onPress}>
      {icon}
      <Typography variant="button" color={textColor} style={BUTTONTEXT}>
        {btnText}
      </Typography>
    </TouchableOpacity>
  )
}
