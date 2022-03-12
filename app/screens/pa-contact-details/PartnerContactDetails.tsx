/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { View, StyleSheet, StatusBar, Platform } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { PartnerContactsNavigatorParamList } from "../../navigators"
import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { ContactHeader, Divider, SpaceMarker, TextExplainer } from "../../components"
import { translate } from "../../i18n"
import { useStores } from "../../models"

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

export const PartnerContactDetails: React.FC<
  StackScreenProps<PartnerContactsNavigatorParamList, "details">
> = ({
  route: {
    params: { id: contactId },
  },
}) => {
  const {
    contactStore: { contacts },
  } = useStores()
  const profile = React.useMemo(() => contacts.find((contact) => contact.id === contactId), [
    contactId,
  ])

  const geo = React.useMemo(
    () => ({
      longitude: profile.location.coords[0],
      latitude: profile.location.coords[1],
    }),
    [profile.location.coords],
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <MapView
        style={styles.map}
        showsCompass={false}
        initialCamera={{
          center: geo,
          zoom: 8,
          pitch: 1,
          heading: 1,
          altitude: Platform.select({ ios: 4000, android: 1000 }),
        }}
      >
        <SpaceMarker active location={geo} nrBeds={profile.location.nrBeds} />
      </MapView>

      <View style={styles.panel}>
        <ContactHeader
          name={profile.name}
          phone={profile.contact.phone}
          email={profile.contact.email}
        />
        <Divider style={styles.divider} />
        <TextExplainer
          icon="home"
          title={translate("screens.ho-profile.addressDetails")}
          text={[
            profile.location.address,
            `${profile.location.postal} ${profile.location.city}`,
            translate(`countries.${profile.location.country}`),
          ]}
        />
        <TextExplainer
          style={styles.secondExplainer}
          icon="bed"
          title={translate("screens.ho-profile.accomodates")}
          text={translate("screens.ho-profile.personPhrase", {
            count: profile.location.nrBeds,
          })}
        />
      </View>
    </View>
  )
}
