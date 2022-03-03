import * as React from "react"
import { View, StyleProp, ViewStyle } from "react-native"
import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  status: "approved" | "pending"
}

const styles: ViewStyle = {
  width: 24,
  height: 2,
  borderRadius: 2,
  ...shadows.glow,
}

export const StatusBar: React.FC<PanelProps> = ({ style: styleOverride, status }) => {
  const statusStyles: ViewStyle = React.useMemo(() => {
    const statusColor = status === "approved" ? color.palette.accept : color.palette.warn
    return {
      backgroundColor: statusColor,
      shadowColor: statusColor,
    }
  }, [status])

  return <View style={[styles, statusStyles, styleOverride]} />
}
