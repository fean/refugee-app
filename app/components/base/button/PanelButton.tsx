import * as React from "react"
import { StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { translate } from "../../../i18n"

import { Typography } from "../typography/Typography"
import { Panel } from "../panel"
import { color } from "../../../theme"

interface SimpleButtonProps {
  style?: StyleProp<ViewStyle>
  icon?: string
  iconColor?: string
  text?: string
  tx?: string
  onPress?: () => void
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  icon: {
    marginRight: 16,
  },
  nextIcon: {
    marginLeft: 8,
  },
  text: {
    flex: 1,
  },
})

export const PanelButton: React.FC<SimpleButtonProps> = ({
  icon,
  iconColor = color.palette.textShade,
  text,
  tx,
  style: styleOverride,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)

  return (
    <TouchableOpacity style={styleOverride} onPress={onPress}>
      <Panel style={styles.bar}>
        <Icon name={icon} size={32} color={iconColor} style={styles.icon} />
        <Typography variant="subheader" style={styles.text}>
          {btnText}
        </Typography>

        <Icon
          name="chevron-forward-outline"
          size={24}
          color={color.palette.textDisabled}
          style={styles.nextIcon}
        />
      </Panel>
    </TouchableOpacity>
  )
}
