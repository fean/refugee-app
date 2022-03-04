import * as React from "react"
import { Text, StyleProp, TextStyle, TextProps } from "react-native"
import { color, typography } from "../../../theme"

interface TypographyProps {
  variant: "title" | "header" | "text" | "chip" | "button"
  color?: "text" | "disabled" | "placeholder" | "shade" | "warn" | "accepted" | "europe" | "white"
  ellipsizeMode?: TextProps["ellipsizeMode"]
  numberOfLines?: TextProps["numberOfLines"]
  style?: StyleProp<TextStyle>
}

const COLORS = {
  text: color.palette.text,
  disabled: color.palette.textDisabled,
  placeholder: color.palette.placeholder,
  shade: color.palette.textShade,
  warn: color.palette.warn,
  accepted: color.palette.accept,
  europe: color.palette.europe,
  white: color.palette.white,
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color = "text",
  ellipsizeMode,
  numberOfLines,
  style,
  children,
}) => {
  const propStyles: TextStyle = React.useMemo(
    () => ({
      ...typography[variant],
      color: COLORS[color],
    }),
    [variant, color],
  )

  return (
    <Text style={[propStyles, style]} ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines}>
      {children}
    </Text>
  )
}
