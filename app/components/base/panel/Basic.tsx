import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import { borderRadius, color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: color.palette.white,
    borderRadius: borderRadius.big,
    ...shadows.block,
  },
})

export const Panel: React.FC<PanelProps> = ({ style: styleOverride, children }) => (
  <View style={[styles.bar, styleOverride]}>{children}</View>
)
