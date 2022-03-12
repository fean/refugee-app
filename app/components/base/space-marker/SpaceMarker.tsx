import * as React from "react"
import { LatLng, Marker, MarkerProps } from "react-native-maps"

import { createMarkerUri } from "./utils"
import { Platform } from "react-native"

interface PanelProps {
  active?: boolean
  location: LatLng
  nrBeds: number
  onPress?: () => void
}

const anchor = { x: 0.5, y: 0.5 }

const createProps = Platform.select<(nrBeds: number, active?: boolean) => Partial<MarkerProps>>({
  ios: (nrBeds, active) => ({ image: { uri: createMarkerUri(active, nrBeds) } }),
  android: (nrBeds, active) => ({ icon: { uri: createMarkerUri(active, nrBeds) } }),
})

export const SpaceMarker: React.FC<PanelProps> = ({ active, nrBeds, location, onPress }) => {
  return (
    <Marker
      coordinate={location}
      anchor={anchor}
      {...createProps(nrBeds, active)}
      onPress={onPress}
    />
  )
}
