import * as React from "react"
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableHighlight,
} from "react-native"

import { Typography } from "../../base/typography/Typography"
import { StatusPanel } from "../../base/panel"
import { translate } from "../../../i18n"
import * as theme from "../../../theme"

interface PartnerContactProps {
  style?: StyleProp<ViewStyle>
  cardStyle?: StyleProp<ViewStyle>
  disabled?: boolean
  id: string
  state: string
  date: Date
  name: string
  address: string
  postal: string
  city: string
  beds: number
  onPress: (selectedId: string) => void
}

const styles = StyleSheet.create({
  address: {
    flex: 1,
  },
  bar: {
    flexDirection: "column",
  },
  name: {
    marginBottom: 8,
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

export const PartnerContact: React.FC<PartnerContactProps> = ({
  style: styleOverride,
  cardStyle,
  disabled,
  id,
  name,
  state,
  date,
  address,
  postal,
  city,
  beds,
  onPress,
}) => {
  const handlePress = React.useCallback(() => onPress(id), [id, onPress])

  return (
    <Touchable style={[styles.touchable, styleOverride]} onPress={handlePress} disabled={disabled}>
      <StatusPanel panelStyle={[styles.bar, cardStyle]} status={state} date={date}>
        <Typography variant="header" style={styles.name}>
          {state === "approved"
            ? name
            : translate("cards.partner-contact.cardTitle", { count: beds })}
        </Typography>

        <Typography variant="text" color="shade" style={styles.address}>
          {address}
        </Typography>
        <Typography variant="text" color="shade" style={styles.address}>
          {`${postal} ${city}`}
        </Typography>
      </StatusPanel>
    </Touchable>
  )
}
