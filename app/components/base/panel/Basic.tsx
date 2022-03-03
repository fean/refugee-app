import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: color.palette.white,
    borderRadius: 12,
    ...shadows.block,
  },
})

export const Panel: React.FC<PanelProps> = ({ style: styleOverride, children }) => (
  <View style={[styles.panel, styleOverride]}>{children}</View>
)
