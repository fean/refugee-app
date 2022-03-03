import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, View } from "react-native"

import { color } from "../../../theme"
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

const ICON: ViewStyle = {
  marginEnd: 8,
}

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
      width: icon && !text ? 32 : undefined,
    }),
    [disabled, icon, text],
  )
  const textColor = disabled ? "disabled" : "white"

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[BUTTONBASE, colorStyles, styleOverride]}
      onPress={onPress}
    >
      {icon && <View style={text && ICON}>{icon}</View>}
      {btnText && (
        <Typography variant="button" color={textColor}>
          {btnText}
        </Typography>
      )}
    </TouchableOpacity>
  )
}
