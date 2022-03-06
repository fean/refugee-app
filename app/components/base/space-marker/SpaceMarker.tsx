import * as React from "react"
import { LatLng, Marker } from "react-native-maps"

import { createMarkerUri } from "./utils"

interface PanelProps {
  active?: boolean
  location: LatLng
  nrBeds: number
}

export const SpaceMarker: React.FC<PanelProps> = ({ active, nrBeds, location }) => {
  const markerResourceUri = createMarkerUri(active, nrBeds)
  return <Marker coordinate={location} image={{ uri: markerResourceUri }} />
}
