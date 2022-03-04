import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, View, StyleSheet, Text } from "react-native"

import { translate } from "../../../i18n"

import { Typography } from "../typography/Typography"
import { Panel } from "../panel"

interface SimpleButtonProps {
  style?: StyleProp<ViewStyle>
  emojiIcon?: string
  text?: string
  tx?: string
  onPress?: () => void
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 48,
    marginBottom: 16,
    textAlign: "center",
  },
  inner: {
    justifyContent: "center",
  },
  panel: {
    alignItems: "center",
    flexDirection: "row",
    height: 152,
    justifyContent: "center",
    width: 152,
  },
})

export const PanelButton: React.FC<SimpleButtonProps> = ({
  emojiIcon,
  text,
  tx,
  style: styleOverride,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)

  return (
    <TouchableOpacity onPress={onPress}>
      <Panel style={styles.panel}>
        <View style={styles.inner}>
          <Text style={styles.icon}>{emojiIcon}</Text>
          <Typography variant="subheader">{btnText}</Typography>
        </View>
      </Panel>
    </TouchableOpacity>
  )
}
