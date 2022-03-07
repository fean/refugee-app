/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { PartnerTabsTabsNavigatorParamList } from "../../navigators"
import { getCurrentLocation } from "./helpers"
import { LocationSearchBlock } from "../../components"
import { Location } from "../../models/location/location"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  search: {
    left: 16,
    position: "absolute",
    right: 16,
    top: 64,
  },
})

const initialCamera = {
  center: {
    latitude: 52.3675734,
    longitude: 4.9041389,
  },
  zoom: 8,
  pitch: 1,
  heading: 1,
  altitude: 8000,
}

export const PartnerSearchScreen: React.FC<
  StackScreenProps<PartnerTabsTabsNavigatorParamList, "search">
> = () => {
  const [camera, setCamera] = React.useState(initialCamera)
  const [isReady, setReady] = React.useState(false)

  const handleSelect = React.useCallback((selection: Location | null) => {
    if (selection) {
      setCamera((cam) => ({ ...cam, center: { ...selection.geo } }))
    } else {
      setCamera(initialCamera)
    }
  }, [])

  React.useEffect(() => {
    getCurrentLocation().then((coords) => {
      if (coords) {
        setCamera((current) => ({ ...current, center: coords }))
      }
      setReady(true)
    })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isReady && <MapView style={styles.map} camera={camera} />}

      <LocationSearchBlock style={styles.search} onSelect={handleSelect} />
    </View>
  )
}
