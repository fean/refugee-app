import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"

import { color } from "../../../theme"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  color?: string
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
  },
})

export const Divider: React.FC<PanelProps> = ({
  style: styleOverride,
  color: userColor = color.palette.control,
}) => {
  const colorStyle = React.useMemo(
    () => ({
      backgroundColor: userColor,
    }),
    [color],
  )

  return <View style={[styles.divider, colorStyle, styleOverride]} />
}
