import * as React from "react"
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { translate } from "../../../i18n"

import { Typography } from "../typography/Typography"
import { Panel } from "../panel"
import * as theme from "../../../theme"

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
  touchable: {
    borderRadius: theme.borderRadius.big,
  },
})

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: ((props) => (
    <TouchableHighlight activeOpacity={0.7} underlayColor={theme.color.palette.white} {...props} />
  )) as any,
})

export const PanelButton: React.FC<SimpleButtonProps> = ({
  icon,
  iconColor = theme.color.palette.textShade,
  text,
  tx,
  style: styleOverride,
  onPress,
}) => {
  const btnText = text || (tx ? translate(tx) : null)

  return (
    <Touchable style={[styles.touchable, styleOverride]} onPress={onPress}>
      <Panel style={styles.bar}>
        <Icon name={icon} size={32} color={iconColor} style={styles.icon} />
        <Typography variant="subheader" style={styles.text}>
          {btnText}
        </Typography>

        <Icon
          name="chevron-forward-outline"
          size={24}
          color={theme.color.palette.textDisabled}
          style={styles.nextIcon}
        />
      </Panel>
    </Touchable>
  )
}
