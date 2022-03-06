import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, Linking } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { getAvatarSimplification } from "../../../utils/avatar"

import { Avatar } from "../../base/avatar/Avatar"
import { Typography } from "../../base/typography/Typography"
import { IconButton } from "../../base/button"

interface ContactHeaderProps {
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
  container: {
    flexDirection: "row",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  iconBtn: {
    height: 32,
    marginEnd: 16,
    width: 32,
  },
  optionsContainer: {
    flexDirection: "row",
  },
})

export const ContactHeader: React.FC<ContactHeaderProps> = ({
  style: styleOverride,
  name,
  email,
  phone,
  website,
}) => {
  const nameAbbreviation = React.useMemo(() => getAvatarSimplification(name), [name])

  const handlePressPhone = React.useCallback(() => Linking.openURL(`tel:${phone}`), [phone])

  const handlePressEmail = React.useCallback(() => Linking.openURL(`mailto:${email}`), [email])

  const handlePressWebsite = React.useCallback(() => Linking.openURL(website), [website])

  return (
    <View style={[styles.container, styleOverride]}>
      <Avatar text={nameAbbreviation} style={styles.avatar} />
      <View style={styles.contentContainer}>
        <Typography variant="header">{name}</Typography>

        <View style={styles.optionsContainer}>
          {phone && (
            <IconButton
              style={styles.iconBtn}
              icon={<Icon name="call" size={16} color={color.palette.textShade} />}
              onPress={handlePressPhone}
            />
          )}
          {email && (
            <IconButton
              style={styles.iconBtn}
              icon={<Icon name="mail" size={16} color={color.palette.textShade} />}
              onPress={handlePressEmail}
            />
          )}
          {website && (
            <IconButton
              style={styles.iconBtn}
              icon={<Icon name="earth" size={16} color={color.palette.textShade} />}
              onPress={handlePressWebsite}
            />
          )}
        </View>
      </View>
    </View>
  )
}
