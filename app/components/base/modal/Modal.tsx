import * as React from "react"
import {
  StyleProp,
  Modal as ModalEx,
  StyleSheet,
  ViewStyle,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { borderRadius, color } from "../../../theme"
import { shadows } from "../../../theme/shadows"

import { Typography } from "../typography/Typography"
import { IconButton } from "../button"
import { Divider } from "../divider/Divider"

interface ModalProps {
  style?: StyleProp<ViewStyle>
  headerStyle?: StyleProp<ViewStyle>
  open?: boolean
  title: string
  onClose?: () => void
}

const screen = Dimensions.get("screen")

const styles = StyleSheet.create({
  divider: {
    marginTop: 16,
  },
  modal: {
    backgroundColor: color.palette.white,
    borderTopLeftRadius: borderRadius.big,
    borderTopRightRadius: borderRadius.big,
    bottom: 0,
    height: screen.height * 0.6,
    left: 0,
    paddingLeft: 16,
    paddingRight: 16,
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
    marginBottom: 16,
    marginTop: 16,
  },
})

export const Modal: React.FC<ModalProps> = ({
  style: overrideStyle,
  headerStyle: headerOverrideStyle,
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
    <SafeAreaView style={[styles.modal, overrideStyle]}>
      <View style={[styles.title, headerOverrideStyle]}>
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
    </SafeAreaView>
  </ModalEx>
)
