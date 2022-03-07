/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { Alert, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { PartnerTabsTabsNavigatorParamList } from "../../navigators"
import { getCurrentLocation } from "./helpers"
import { LocationSearchBlock, MapSpace, SpaceMarker } from "../../components"
import { Location } from "../../models/location/location"
import { translate } from "../../i18n"

const styles = StyleSheet.create({
  activeContainer: {
    bottom: 40,
    left: 16,
    position: "absolute",
    right: 16,
  },
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

const locations = [
  {
    id: "1234",
    geo: {
      latitude: 52.3724599,
      longitude: 4.8795857,
    },
    address: "Rozenstraat 112-III",
    postal: "1016 NZ",
    city: "Amsterdam",
    country: "nl",
    beds: 2,
  },
  {
    id: "4321",
    geo: {
      latitude: 52.3790557,
      longitude: 4.6348468,
    },
    address: "Frankestraat 42",
    postal: "2011 HV",
    city: "Haarlem",
    country: "nl",
    beds: 1,
  },
  {
    id: "12345",
    geo: {
      latitude: 52.3124588,
      longitude: 5.0315648,
    },
    address: "Aertjanssenstraat 6",
    postal: "1382 EE",
    city: "Weesp",
    country: "nl",
    beds: 3,
  },
  {
    id: "123456",
    geo: {
      latitude: 52.3634711,
      longitude: 4.9014324,
    },
    address: "Kerkstraat 461-383",
    postal: "1017 HZ",
    city: "Amsterdam",
    country: "nl",
    beds: 2,
  },
  {
    id: "1234567",
    geo: {
      latitude: 52.6971515,
      longitude: 4.8099313,
    },
    address: "Prinsengracht 2",
    postal: "1722 GM",
    city: "Zuid-scharwoude",
    country: "nl",
    beds: 2,
  },
]

export const PartnerSearchScreen: React.FC<
  StackScreenProps<PartnerTabsTabsNavigatorParamList, "search">
> = () => {
  const [camera, setCamera] = React.useState(initialCamera)
  const [isReady, setReady] = React.useState(false)
  const [activeMarker, setActiveMarker] = React.useState<typeof locations[0]>()

  const handleSelect = React.useCallback((selection: Location | null) => {
    if (selection) {
      setCamera((cam) => ({ ...cam, center: { ...selection.geo } }))
    } else {
      setCamera(initialCamera)
    }
  }, [])

  const handleFocusMarker = React.useCallback(
    (location: typeof locations[0]) => {
      if (activeMarker?.id === location.id) {
        setActiveMarker(null)
        return
      }

      setCamera((current) => ({ ...current, center: location.geo }))
      setActiveMarker(location)
    },
    [activeMarker],
  )

  const handleRequestDetails = React.useCallback(() => {
    Alert.alert(
      translate("screens.pa-search.requestPrompt.title"),
      translate("screens.pa-search.requestPrompt.text"),
      [
        { text: translate("common.cancel") },
        { text: translate("screens.pa-search.requestPrompt.action") },
      ],
      {
        cancelable: true,
      },
    )
  }, [activeMarker])

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

      {isReady && (
        <MapView style={styles.map} camera={camera}>
          {locations.map((location) => (
            <SpaceMarker
              key={location.id}
              active={activeMarker?.id === location.id}
              location={location.geo}
              nrBeds={location.beds}
              onPress={() => handleFocusMarker(location)}
            />
          ))}
        </MapView>
      )}

      <LocationSearchBlock style={styles.search} onSelect={handleSelect} />

      {activeMarker && (
        <View style={styles.activeContainer}>
          <MapSpace
            id={activeMarker.id}
            name={translate("screens.pa-search.persons", { count: activeMarker.beds })}
            address={activeMarker.address}
            city={activeMarker.city}
            onPress={handleRequestDetails}
          />
        </View>
      )}
    </View>
  )
}
