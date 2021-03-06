import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, View, ActivityIndicator } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"
import { Button } from "../../base/button"
import { color } from "../../../theme"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  isLoading?: boolean
  id: string
  name: string
  address: string
  city: string
  onPress: (selectedId: string) => void
}

const styles = StyleSheet.create({
  address: {
    flex: 1,
  },
  bar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  button: {
    height: 40,
    width: 40,
  },
  name: {
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: "column",
  },
})

export const MapSpace: React.FC<PanelProps> = ({
  style: styleOverride,
  isLoading,
  id,
  name,
  address,
  city,
  onPress,
}) => {
  const handlePress = React.useCallback(() => onPress(id), [id, onPress])

  return (
    <Panel style={[styles.bar, styleOverride]}>
      <View style={styles.textContainer}>
        <Typography variant="header" style={styles.name}>
          {name}
        </Typography>

        <Typography variant="text" color="shade" style={styles.address}>
          {address}
        </Typography>
        <Typography variant="text" color="shade" style={styles.address}>
          {city}
        </Typography>
      </View>

      <Button
        style={styles.button}
        disabled={isLoading}
        icon={
          isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Icon name="link" size={16} color={color.palette.white} />
          )
        }
        onPress={handlePress}
      />
    </Panel>
  )
}
