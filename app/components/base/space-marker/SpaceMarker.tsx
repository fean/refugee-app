import * as React from "react"
import { LatLng, Marker } from "react-native-maps"

import { createMarkerUri } from "./utils"

interface PanelProps {
  active?: boolean
  location: LatLng
  nrBeds: number
  onPress?: () => void
}

const anchor = { x: 0.5, y: 0.5 }

export const SpaceMarker: React.FC<PanelProps> = ({ active, nrBeds, location, onPress }) => (
  <Marker
    coordinate={location}
    anchor={anchor}
    icon={{ uri: createMarkerUri(active, nrBeds) }}
    onPress={onPress}
  />
)
