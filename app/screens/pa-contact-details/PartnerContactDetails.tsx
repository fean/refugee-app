/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { View, StyleSheet, StatusBar } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import MapView from "react-native-maps"

import { PartnerContactsNavigatorParamList } from "../../navigators"
import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { ContactHeader, Divider, SpaceMarker, TextExplainer } from "../../components"
import { translate } from "../../i18n"
import { partnerContacts } from "../pa-contacts/PartnerContacts"

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
  const profile = partnerContacts.find((contact) => contact.id === contactId)

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
          text={translate("screens.ho-profile.personPhrase", {
            count: profile.beds,
          })}
        />
      </View>
    </View>
  )
}
