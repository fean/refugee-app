import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, Linking, Text } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { getAvatarSimplification } from "../../../utils/avatar"

import { Avatar } from "../../base/avatar/Avatar"
import { Typography } from "../../base/typography/Typography"
import { IconButton } from "../../base/button"

interface ContactHeaderSelfProps {
  style?: StyleProp<ViewStyle>
  name: string
  email?: string
  phone?: string
  website?: string
}

const styles = StyleSheet.create({
  avatar: {
    height: 64,
    marginRight: 16,
    width: 64,
  },
  contactInfoLabel: { color: color.palette.textShade, marginLeft: 10 },
  container: {
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconLabelContainer: { alignItems: "center", flexDirection: "row" },
})

export const ContactHeaderSelf: React.FC<ContactHeaderSelfProps> = ({
  style: styleOverride,
  name,
  email,
  phone,
}) => {
  const nameAbbreviation = React.useMemo(() => getAvatarSimplification(name), [name])

  return (
    <View style={[styles.container, styleOverride]}>
      <Avatar text={nameAbbreviation} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Typography variant="header">{name}</Typography>

        <View>
          {phone && (
            <View style={styles.iconLabelContainer}>
              <Icon name="call" size={16} color={color.palette.textShade} />
              <Text style={styles.contactInfoLabel}>{phone}</Text>
            </View>
          )}
          {email && (
            <View style={styles.iconLabelContainer}>
              <Icon name="mail" size={16} color={color.palette.textShade} />
              <Text style={styles.contactInfoLabel}>{email}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
