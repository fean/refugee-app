import * as React from "react"
import { View, StyleProp, ViewStyle } from "react-native"

import { color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  text: string
}

const AVATAR: ViewStyle = {
  backgroundColor: color.palette.europeShade,
  borderRadius: 5,
  width: 48,
  height: 48,
  justifyContent: "center",
  alignItems: "center",
}

export const Avatar: React.FC<PanelProps> = ({ style: styleOverride, text }) => (
  <View style={[AVATAR, styleOverride]}>
    <Typography variant="header" color="europe">
      {text}
    </Typography>
  </View>
)
