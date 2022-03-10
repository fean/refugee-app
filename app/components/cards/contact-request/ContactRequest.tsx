import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"

import { getAvatarSimplification } from "../../../utils/avatar"

import { Typography } from "../../base/typography/Typography"
import { StatusPanel } from "../../base/panel"
import { Avatar } from "../../base/avatar/Avatar"

interface PanelProps {
  style?: StyleProp<ViewStyle>
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
  content: {
    flexDirection: "row",
    marginTop: 8,
  },
  mission: {
    flex: 1,
  },
  bar: {
    flexDirection: "column",
  },
})

export const ContactRequest: React.FC<PanelProps> = ({
  style: styleOverride,
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
    <TouchableOpacity onPress={handlePress}>
      <StatusPanel panelStyle={[styles.bar, styleOverride]} status={state} date={date}>
        <Typography variant="header">{name}</Typography>

        <View style={styles.content}>
          <Avatar text={avatarSimp} style={styles.avatar} />

          <Typography variant="text" color="shade" style={styles.mission}>
            {mission}
          </Typography>
        </View>
      </StatusPanel>
    </TouchableOpacity>
  )
}
