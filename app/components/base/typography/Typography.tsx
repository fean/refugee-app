import * as React from "react"
import { Text, StyleProp, TextStyle } from "react-native"
import { color, typography } from "../../theme"

interface TypographyProps {
  variant: "title" | "header" | "text" | "chip"
  color?: "text" | "disabled" | "placeholder" | "shade" | "warn" | "accepted"
  style?: StyleProp<TextStyle>
}

const COLORS = {
  text: color.palette.text,
  disabled: color.palette.textDisabled,
  placeholder: color.palette.placeholder,
  shade: color.palette.textShade,
  warn: color.palette.warn,
  accepted: color.palette.accept,
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  color = "text",
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

  return <Text style={[propStyles, style]}>{children}</Text>
}
