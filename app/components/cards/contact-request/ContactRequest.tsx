import * as React from "react"
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
} from "react-native"

import { getAvatarSimplification } from "../../../utils/avatar"

import { Typography } from "../../base/typography/Typography"
import { StatusPanel } from "../../base/panel"
import { Avatar } from "../../base/avatar/Avatar"
import * as theme from "../../../theme"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  cardStyle?: StyleProp<ViewStyle>
  id: string
  state: string
  date: Date
  name: string
  mission: string
  onPress: (selectedId: string) => void
}

const styles = StyleSheet.create({
  avatar: {
    marginRight: 8,
  },
  bar: {
    flexDirection: "column",
  },
  content: {
    flexDirection: "row",
    marginTop: 8,
  },
  mission: {
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

export const ContactRequest: React.FC<PanelProps> = ({
  style: styleOverride,
  cardStyle,
  id,
  name,
  state,
  date,
  mission,
  onPress,
}) => {
  const handlePress = React.useCallback(() => onPress(id), [id, onPress])
  const avatarSimp = React.useMemo(() => getAvatarSimplification(name), [name])

  return (
    <Touchable style={[styles.touchable, styleOverride]} onPress={handlePress}>
      <StatusPanel panelStyle={[styles.bar, cardStyle]} status={state} date={date}>
        <Typography variant="header">{name}</Typography>

        <View style={styles.content}>
          <Avatar text={avatarSimp} style={styles.avatar} />

          <Typography variant="text" color="shade" style={styles.mission}>
            {mission}
          </Typography>
        </View>
      </StatusPanel>
    </Touchable>
  )
}
