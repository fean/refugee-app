import * as React from "react"
import { View, StyleProp, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  option: "1" | "2" | "3" | "4" | "complete"
}

const NUMBER: ViewStyle = {
  borderRadius: 16,
  width: 32,
  height: 32,
  justifyContent: "center",
  alignItems: "center",
}

export const Number: React.FC<PanelProps> = ({ style: styleOverride, option }) => {
  const colorOverride = React.useMemo(
    () => ({
      backgroundColor: option !== "complete" ? color.palette.europeShade : color.palette.europe,
    }),
    [option],
  )

  return (
    <View style={[NUMBER, colorOverride, styleOverride]}>
      {option !== "complete" ? (
        <Typography variant="header" color="europe">
          {option}
        </Typography>
      ) : (
        <Icon name="checkmark-outline" size={24} color={color.palette.white} />
      )}
    </View>
  )
}
