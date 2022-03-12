import { LatLng } from "react-native-maps"
import Geolocation from "@react-native-community/geolocation"

export interface MapBoundingBox {
  northEast: LatLng
  southWest: LatLng
}

export const getCurrentLocation = (): Promise<LatLng | null> => {
  return new Promise<LatLng>((resolve) => {
    Geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        })
      },
      (error) => {
        console.warn("No location picked up", error)
        resolve(null)
      },
    )
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

export const getBoxDiameter = (from: number[], to: number[]): number => {
  const R = 6371000 // In Meters
  const dLat = toRad(to[1] - from[1])
  const dLon = toRad(to[0] - from[0])
  const lat1 = toRad(from[1])
  const lat2 = toRad(to[1])

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

const toRad = (degreeValue: number) => (degreeValue * Math.PI) / 180

export const getBoxCenter = (from: number[], to: number[]): number[] => [
  (from[0] + to[0]) / 2,
  (from[1] + to[1]) / 2,
]
