import { LatLng } from "react-native-maps"
import Geolocation from "react-native-geolocation-service"
import { Platform } from "react-native"

export interface MapBoundingBox {
  northEast: LatLng
  southWest: LatLng
}

export const getCurrentLocation = (): Promise<LatLng | null> => {
  return new Promise<LatLng>((resolve) => {
    const doRequestLocation = () => {
      Geolocation.getCurrentPosition(
        (pos) => {
          if (pos.mocked) {
            resolve(null)
          }

          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          })
        },
        () => resolve(null),
        { enableHighAccuracy: false },
      )
    }

    if (Platform.OS === "ios") {
      Geolocation.requestAuthorization("whenInUse").then((value) => {
        if (value === "granted") {
          doRequestLocation()
        } else {
          resolve(null)
        }
      })
    } else {
      doRequestLocation()
    }
  })
}

export const isOutsideBoundingBox = (
  currentBox: MapBoundingBox,
  newBox: MapBoundingBox,
): boolean => {
  const isOutsideHorizontal =
    newBox.southWest.latitude < currentBox.southWest.latitude ||
    newBox.northEast.latitude > currentBox.northEast.latitude

  const isOutsideVertical =
    newBox.southWest.longitude < currentBox.southWest.longitude ||
    newBox.northEast.longitude > currentBox.northEast.longitude

  return isOutsideHorizontal || isOutsideVertical
}

export const getDistance = (from: number[], to: number[]): number => {
  const R = 6371 // km
  const dLat = toRad(to[1] - from[1])
  const dLon = toRad(to[0] - from[0])
  const lat1 = toRad(from[1])
  const lat2 = toRad(to[1])

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c

  return d * 1000
}

const toRad = (degreeValue: number) => (degreeValue * Math.PI) / 180

export const getCenter = (from: number[], to: number[]): number[] => [
  (from[0] + to[0]) / 2,
  (from[1] + to[1]) / 2,
]
