import * as React from "react"
import {
  StyleProp,
  Modal as ModalEx,
  StyleSheet,
  ViewStyle,
  View,
  Dimensions,
  Platform,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

import { Typography } from "../typography/Typography"
import { IconButton } from "../button"
import { Divider } from "../divider/Divider"

interface ModalProps {
  style?: StyleProp<ViewStyle>
  open?: boolean
  title: string
  onClose?: () => void
}

const screen = Dimensions.get("screen")

const styles = StyleSheet.create({
  divider: {
    marginBottom: 16,
    marginTop: 16,
  },
  modal: {
    backgroundColor: color.palette.white,
    borderRadius: 12,
    bottom: 0,
    height: screen.height * 0.6,
    left: 0,
    paddingBottom: Platform.select({
      ios: 34 + 8,
      android: 16,
    }),
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    position: "absolute",
    width: screen.width,
    ...shadows.cover,
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "column",
  },
})

export const Modal: React.FC<ModalProps> = ({
  style: overrideStyles,
  open,
  title,
  children,
  onClose,
}) => (
  <ModalEx
    transparent
    presentationStyle="overFullScreen"
    animationType="slide"
    visible={open}
    onRequestClose={onClose}
  >
    <View style={[styles.modal, overrideStyles]}>
      <View style={styles.title}>
        <View style={styles.textContainer}>
          <Typography variant="header">{title}</Typography>
          <IconButton
            icon={<Icon name="close-outline" size={20} color={color.palette.text} />}
            onPress={onClose}
          />
        </View>

        <Divider style={styles.divider} />
      </View>
      {children}
    </View>
  </ModalEx>
)
