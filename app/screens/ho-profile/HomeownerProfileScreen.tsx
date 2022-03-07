/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { View, StyleSheet, StatusBar } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { HomeownerTabsNavigatorParamList } from "../../navigators"
import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { ContactHeader, Divider, SpaceMarker, TextExplainer } from "../../components"
import { translate } from "../../i18n"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  divider: {
    marginBottom: 32,
    marginTop: 32,
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

export const profile = {
  geo: {
    latitude: 52.3724599,
    longitude: 4.8795857,
  },
  name: "Johnny Samaritan",
  phone: "+31612345678",
  email: "johhny@gmail.com",
  address: "Rozenstraat 112-III",
  postal: "1016 NZ",
  city: "Amsterdam",
  country: "nl",
  beds: 1,
}

export const HomeownerProfileScreen: React.FC<
  StackScreenProps<HomeownerTabsNavigatorParamList, "profile">
> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <MapView
        style={styles.map}
        initialCamera={{
          center: profile.geo,
          zoom: 8,
          pitch: 1,
          heading: 1,
          altitude: 4000,
        }}
      >
        <SpaceMarker active location={profile.geo} nrBeds={profile.beds} />
      </MapView>

      <View style={styles.panel}>
        <ContactHeader name={profile.name} phone={profile.phone} email={profile.email} />
        <Divider style={styles.divider} />
        <TextExplainer
          icon="home"
          title={translate("screens.ho-profile.addressDetails")}
          text={[
            profile.address,
            `${profile.postal} ${profile.city}`,
            translate(`countries.${profile.country}`),
          ]}
        />
        <TextExplainer
          style={styles.secondExplainer}
          icon="bed"
          title={translate("screens.ho-profile.accomodates")}
          text={`${profile.beds} ${translate("screens.ho-profile.personPhrase", {
            count: profile.beds,
          })}`}
        />
      </View>
    </View>
  )
}
