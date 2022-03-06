import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { Typography } from "../../base/typography/Typography"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  icon: string
  title: string
  text: string | string[]
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  icon: {
    marginRight: 16,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
})

export const TextExplainer: React.FC<PanelProps> = ({
  style: styleOverride,
  text,
  icon,
  title,
}) => (
  <View style={[styles.container, styleOverride]}>
    <View style={styles.titleContainer}>
      <Icon name={icon} size={16} color={color.palette.textShade} style={styles.icon} />
      <Typography variant="text">{title}</Typography>
    </View>

    {Array.isArray(text) ? (
      text.map((textPart) => (
        <Typography key={textPart} variant="text" color="shade">
          {textPart}
        </Typography>
      ))
    ) : (
      <Typography variant="text" color="shade">
        {text}
      </Typography>
    )}
  </View>
)
