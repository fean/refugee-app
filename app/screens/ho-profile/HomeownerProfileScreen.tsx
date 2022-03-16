import * as React from "react"
import { View, StyleSheet, StatusBar, Platform, Text, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { HomeownerTabsNavigatorParamList } from "../../navigators"
import { shadows, color } from "../../theme"
import { ContactHeaderSelf, Divider, SpaceMarker, TextExplainer } from "../../components"
import { translate } from "../../i18n"
import { useStores } from "../../models"
import { observer } from "mobx-react-lite"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  divider: {
    marginBottom: 32,
    marginTop: 32,
  },
  logoutText: {
    color: color.palette.warn,
    marginTop: 15,
  },
  map: {
    flex: 1,
  },
  panel: {
    padding: 16,
    paddingBottom: 32,
    paddingTop: 32,
    flexDirection: "column",
    backgroundColor: color.palette.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -6,
    ...shadows.cover,
  },
  secondExplainer: {
    marginTop: 32,
  },
})

export const HomeownerProfileScreen: React.FC<
  StackScreenProps<HomeownerTabsNavigatorParamList, "profile">
> = observer(() => {
  const {
    userStore: { user },
    userStore,
  } = useStores()

  const geo = React.useMemo(
    () => ({
      longitude: user.location.coords[0],
      latitude: user.location.coords[1],
    }),
    [user.location.coords],
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <MapView
        style={styles.map}
        initialCamera={{
          center: geo,
          zoom: 8,
          pitch: 1,
          heading: 1,
          altitude: Platform.select({ ios: 4000, android: 1000 }),
        }}
      >
        <SpaceMarker active location={geo} nrBeds={user.location.nrBeds || 1} />
      </MapView>

      <View style={styles.panel}>
        <ContactHeaderSelf name={user.name} phone={user.contact.phone} email={user.contact.email} />
        <Divider style={styles.divider} />
        <TextExplainer
          icon="home"
          title={translate("screens.ho-profile.addressDetails")}
          text={[
            user.location.address,
            `${user.location.postal} ${user.location.city}`,
            translate(`countries.${user.location.country}`),
          ]}
        />
        <TextExplainer
          style={styles.secondExplainer}
          icon="bed"
          title={translate("screens.ho-profile.accomodates")}
          text={translate("screens.ho-profile.personPhrase", {
            count: user.location.nrBeds || 1,
          })}
        />
        {__DEV__ && (
          <TouchableOpacity onPress={userStore.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
})
