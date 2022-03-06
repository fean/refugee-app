import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, View, StyleSheet } from "react-native"

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

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    height: 32,
    justifyContent: "center",
  },
  icon: {
    marginEnd: 8,
  },
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
    <TouchableOpacity
      disabled={disabled}
      style={[styles.base, colorStyles, styleOverride]}
      onPress={onPress}
    >
      {icon && <View style={text && styles.icon}>{icon}</View>}
      {btnText && (
        <Typography variant="button" color={textColor}>
          {btnText}
        </Typography>
      )}
    </TouchableOpacity>
  )
}
