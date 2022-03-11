import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { borderRadius, color } from "../../../theme"

interface TabBarIconProps {
  style?: StyleProp<ViewStyle>
  focused?: boolean
  icon: string
  color: string
  size: number
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: color.transparent,
    borderRadius: borderRadius.small,
    height: 5,
    marginTop: 6,
    width: 5,
  },
  dotActive: {
    backgroundColor: color.palette.europe,
  },
  dotContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
})

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  style: styleOverride,
  focused,
  icon,
  size,
  color,
}) => (
  <View style={[styles.dotContainer, styleOverride]}>
    <Icon name={icon} size={size} color={color} />
    <View style={[styles.dot, focused && styles.dotActive]} />
  </View>
)
