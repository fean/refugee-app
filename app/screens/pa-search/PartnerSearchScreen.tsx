/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { ActivityIndicator, Alert, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"
import { observer } from "mobx-react-lite"
import Icon from "react-native-vector-icons/Ionicons"

import { PartnerTabsTabsNavigatorParamList } from "../../navigators"
import { getCurrentLocation, isOutsideBoundingBox, MapBoundingBox } from "./helpers"
import {
  LocationSearchBlock,
  MapSpace,
  Panel,
  SpaceMarker,
  Typography,
  Button,
} from "../../components"
import { Location } from "../../models/location/location"
import { translate } from "../../i18n"
import { useStores } from "../../models"
import { Room } from "../../models/Room"
import { color } from "../../theme"

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
  floatingContainer: {
    elevation: 1,
    flexDirection: "row",
    justifyContent: "center",
    left: 16,
    position: "absolute",
    right: 16,
    top: 120,
  },
  loadingPanel: {
    alignItems: "center",
    flexDirection: "row",
    padding: 4,
    width: 96,
  },
  loadingText: {
    flex: 0,
  },
  map: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  reload: {
    marginRight: 8,
  },
  search: {
    elevation: 2,
    left: 16,
    position: "absolute",
    right: 16,
    top: 64,
  },
  searchBtn: {
    height: 28,
    paddingLeft: 8,
    paddingRight: 8,
  },
  spinner: {
    marginRight: 8,
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
> = observer(() => {
  const boxRef = React.useRef<MapBoundingBox>()
  const mapRef = React.useRef<MapView>()

  const [camera, setCamera] = React.useState(initialCamera)
  const [isReady, setReady] = React.useState(false)
  const [isLoading, setLoading] = React.useState(false)
  const [isRegionChanged, setRegionChanged] = React.useState(true)
  const [activeMarker, setActiveMarker] = React.useState<Room>()

  const { roomStore } = useStores()
  const { rooms } = roomStore

  const handleFocusMarker = React.useCallback(
    (location: Room) => {
      if (activeMarker?.id === location.id) {
        setActiveMarker(null)
        return
      }

      mapRef.current.animateCamera({
        center: {
          longitude: location.coords[0],
          latitude: location.coords[1],
        },
      })
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

  const handleViewChanged = React.useCallback(() => {
    if (isRegionChanged) return

    mapRef.current.getMapBoundaries().then((boundaries) => {
      if (!boxRef.current || isOutsideBoundingBox(boxRef.current, boundaries)) {
        setRegionChanged(true)
      }
    })
  }, [isRegionChanged])

  const handleLoadRooms = React.useCallback(() => {
    const { current: map } = mapRef

    setLoading(true)
    map.getCamera().then((actualCamera) => {
      roomStore
        .loadRooms(
          [actualCamera.center.longitude, actualCamera.center.latitude],
          Math.min(actualCamera.altitude * 0.1, 20000),
        )
        .then(() => {
          setLoading(false)
          setRegionChanged(false)
          map.getMapBoundaries().then((boundaries) => (boxRef.current = boundaries))
        })
        .catch((error) => {
          setLoading(false)
          setRegionChanged(false)
          console.error(error)
        })
    })
  }, [])

  const handleSelect = React.useCallback((selection: Location | null) => {
    if (selection) {
      mapRef.current.setCamera({
        center: { ...selection.geo },
      })

      handleLoadRooms()
    } else {
      mapRef.current.setCamera({
        center: initialCamera.center,
      })
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

  React.useEffect(() => {
    if (isReady) handleLoadRooms()
  }, [isReady, handleLoadRooms])

  const roomMarkers = React.useMemo(
    () =>
      rooms.map((location) => (
        <SpaceMarker
          key={location.id}
          active={activeMarker?.id === location.id}
          location={{ longitude: location.coords[0], latitude: location.coords[1] }}
          nrBeds={location.beds}
          onPress={() => handleFocusMarker(location)}
        />
      )),
    [rooms, activeMarker],
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {isReady && (
        <MapView
          ref={mapRef}
          loadingEnabled={!isReady}
          style={styles.map}
          userInterfaceStyle="light"
          camera={camera}
          onRegionChangeComplete={handleViewChanged}
        >
          {roomMarkers}
        </MapView>
      )}

      {isLoading && (
        <View style={styles.floatingContainer}>
          <Panel style={styles.loadingPanel}>
            <ActivityIndicator style={styles.spinner} />
            <Typography variant="note" style={styles.loadingText}>
              {translate("common.loading")}
            </Typography>
          </Panel>
        </View>
      )}

      {isRegionChanged && !isLoading && (
        <View style={styles.floatingContainer}>
          <Button
            style={styles.searchBtn}
            tx="screens.pa-search.load-rooms"
            icon={
              <Icon
                name="refresh-outline"
                style={styles.reload}
                size={16}
                color={color.palette.white}
              />
            }
            onPress={handleLoadRooms}
          />
        </View>
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
})
