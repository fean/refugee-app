import { LatLng } from "react-native-maps"
import Geolocation from "react-native-geolocation-service"
import { Platform } from "react-native"

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
