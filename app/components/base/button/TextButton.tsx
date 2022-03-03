import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"

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
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)
  const textColor = disabled ? "disabled" : "text"

  return (
    <TouchableOpacity disabled={disabled} style={[styles.base, styleOverride]} onPress={onPress}>
      {icon}
      <Typography variant="button" color={textColor} style={styles.text}>
        {btnText}
      </Typography>
    </TouchableOpacity>
  )
}
