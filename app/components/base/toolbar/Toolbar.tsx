import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, Platform } from "react-native"
import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
}

export const toolbarHeight = Platform.select({
  ios: 88,
  android: 64,
})

const styles = StyleSheet.create({
  bar: {
    backgroundColor: color.palette.white,
    flex: 1,
    height: toolbarHeight,
    ...shadows.cover,
  },
})

export const Toolbar: React.FC<PanelProps> = ({ style: styleOverride, children }) => (
  <View style={[styles.bar, styleOverride]}>{children}</View>
)
