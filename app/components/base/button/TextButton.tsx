import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"

import { translate } from "../../../i18n"

import { Typography } from "../typography/Typography"
import { borderRadius } from "../../../theme"

interface SimpleButtonProps {
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<ViewStyle>
  icon?: React.ReactNode
  text?: string
  tx?: string
  disabled?: boolean
  onPress?: () => void
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: borderRadius.small,
    flexDirection: "row",
    height: 32,
    justifyContent: "center",
  },
  noIcon: {
    marginStart: 0,
  },
  text: {
    marginStart: 12,
  },
})

export const TextButton: React.FC<SimpleButtonProps> = ({
  disabled,
  icon,
  text,
  tx,
  style: styleOverride,
  textStyle,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)
  const textColor = disabled ? "disabled" : "text"

  return (
    <TouchableOpacity disabled={disabled} style={[styles.base, styleOverride]} onPress={onPress}>
      {icon}
      <Typography
        variant="button"
        color={textColor}
        style={[styles.text, !icon && styles.noIcon, textStyle]}
      >
        {btnText}
      </Typography>
    </TouchableOpacity>
  )
}
