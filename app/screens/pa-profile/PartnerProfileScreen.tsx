/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { ContactHeader, TextExplainer } from "../../components"
import { PartnerTabsTabsNavigatorParamList } from "../../navigators"

import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { useStores } from "../../models"

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

export const PartnerProfileScreen: React.FC<
  StackScreenProps<PartnerTabsTabsNavigatorParamList, "profile">
> = () => {
  const {
    userStore: { user: profile },
  } = useStores()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ContactHeader
        name={profile?.orgName}
        phone={profile?.contact.phone}
        email={profile?.contact.email}
        website={profile?.contact.website}
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
            profile?.location.address,
            `${profile?.location.postal} ${profile?.location.city}`,
            translate(`countries.${profile?.location.country}`),
          ]}
        />

        <TextExplainer
          icon="earth"
          style={styles.explainer}
          title={translate("screens.ho-contact-details.websiteHeader")}
          text={profile?.contact.website}
        />
      </View>
    </View>
  )
}
