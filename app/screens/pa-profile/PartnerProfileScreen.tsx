/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { ContactHeader, TextExplainer } from "../../components"
import { PartnerTabsTabsNavigatorParamList } from "../../navigators"

import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { translate } from "../../i18n"
import sub from "date-fns/sub"

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 16,
    paddingTop: 32,
    flex: 1,
  },
  explainer: {
    marginBottom: 24,
  },
  panel: {
    backgroundColor: color.palette.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    left: 0,
    padding: 16,
    paddingTop: 32,
    position: "absolute",
    right: 0,
    top: 128,
    ...shadows.cover,
  },
})

const profile = {
  id: "1234",
  state: "pending" as "pending",
  date: sub(new Date(), { hours: 2 }),
  name: "Awesome NGO",
  address: "Prinsengracht 2",
  postal: "1722GM",
  city: "Zuid-scharwoude",
  country: "nl",
  phone: "+31623833605",
  email: "leonard@trunkrs.nl",
  website: "https://samaritan-app.eu",
  mission: "We are an awesome NGO that helps find refugees a place in Europe to temporarily stay.",
}

export const PartnerProfileScreen: React.FC<
  StackScreenProps<PartnerTabsTabsNavigatorParamList, "profile">
> = () => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />

    <ContactHeader
      name={profile?.name}
      phone={profile?.phone}
      email={profile?.email}
      website={profile?.website}
    />

    <View style={styles.panel}>
      <TextExplainer
        icon="rocket"
        style={styles.explainer}
        title={translate("screens.ho-contact-details.missionHeader")}
        text={profile?.mission}
      />

      <TextExplainer
        icon="business"
        style={styles.explainer}
        title={translate("screens.ho-contact-details.addressHeader")}
        text={[
          profile?.address,
          `${profile?.postal} ${profile?.city}`,
          translate(`countries.${profile?.country}`),
        ]}
      />

      <TextExplainer
        icon="earth"
        style={styles.explainer}
        title={translate("screens.ho-contact-details.websiteHeader")}
        text={profile?.website}
      />
    </View>
  </View>
)
