import * as React from "react"
import { Text, StyleProp, TextStyle, TextProps } from "react-native"
import { color, typography } from "../../../theme"
import { PropsWithChildren } from "react"

interface TypographyProps {
  variant: "title" | "header" | "subheader" | "text" | "chip" | "button"
  color?: "text" | "disabled" | "placeholder" | "shade" | "warn" | "accepted" | "europe" | "white"
  ellipsizeMode?: TextProps["ellipsizeMode"]
  numberOfLines?: TextProps["numberOfLines"]
  align?: "left" | "center" | "right" | "justify"
  style?: StyleProp<TextStyle>
  onLayout?: TextProps["onLayout"]
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

export const Typography = React.forwardRef<Text, PropsWithChildren<TypographyProps>>(
  (
    { variant, color = "text", align, ellipsizeMode, numberOfLines, style, children, onLayout },
    ref,
  ) => {
    const propStyles: TextStyle = React.useMemo(
      () => ({
        ...typography[variant],
        textAlign: align,
        color: COLORS[color],
      }),
      [variant, color, align],
    )

    return (
      <Text
        ref={ref}
        style={[propStyles, style]}
        ellipsizeMode={ellipsizeMode}
        numberOfLines={numberOfLines}
        onLayout={onLayout}
      >
        {children}
      </Text>
    )
  },
)
