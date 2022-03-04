import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from "react-native"

import { Typography } from "../../base/typography/Typography"
import { StatusPanel } from "../../base/panel"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  id: string
  state: "approved" | "pending"
  date: Date
  name: string
  address: string
  postal: string
  city: string
  onPress: (selectedId: string) => void
}

const styles = StyleSheet.create({
  address: {
    flex: 1,
  },
  panel: {
    flexDirection: "column",
  },
  name: {
    marginBottom: 8,
  },
})

export const PartnerContact: React.FC<PanelProps> = ({
  style: styleOverride,
  id,
  name,
  state,
  date,
  address,
  postal,
  city,
  onPress,
}) => {
  const handlePress = React.useCallback(() => onPress(id), [id, onPress])

  return (
    <TouchableOpacity onPress={handlePress}>
      <StatusPanel panelStyle={[styles.panel, styleOverride]} status={state} date={date}>
        <Typography variant="header" style={styles.name}>
          {name}
        </Typography>

        <Typography variant="text" color="shade" style={styles.address}>
          {address}
        </Typography>
        <Typography variant="text" color="shade" style={styles.address}>
          {`${postal} ${city}`}
        </Typography>
      </StatusPanel>
    </TouchableOpacity>
  )
}
