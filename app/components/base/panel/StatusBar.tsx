import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  status: string
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 2,
    height: 2,
    width: 24,
    ...shadows.glow,
  },
})

export const StatusBar: React.FC<PanelProps> = ({ style: styleOverride, status }) => {
  const statusStyles: ViewStyle = React.useMemo(() => {
    const statusColor = status === "Approved" ? color.palette.accept : color.palette.warn
    return {
      backgroundColor: statusColor,
      shadowColor: statusColor,
    }
  }, [status])

  return <View style={[styles.base, statusStyles, styleOverride]} />
}
