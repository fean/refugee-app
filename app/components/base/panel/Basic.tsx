import * as React from "react"
import { View, StyleProp, ViewStyle } from "react-native"
import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
}

const styles: ViewStyle = {
  backgroundColor: color.palette.white,
  borderRadius: 12,
  ...shadows.block,
}

export const Panel: React.FC<PanelProps> = ({ style: styleOverride, children }) => (
  <View style={[styles, styleOverride]}>{children}</View>
)
