import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native"

import { color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface AvatarProps {
  style?: StyleProp<ViewStyle>
  text: string
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: color.palette.europeShade,
    borderRadius: 5,
    height: 48,
    justifyContent: "center",
    width: 48,
  },
})

export const Avatar: React.FC<AvatarProps> = ({ style: styleOverride, text }) => (
  <View style={[styles.avatar, styleOverride]}>
    <Typography variant="header" color="europe">
      {text}
    </Typography>
  </View>
)
