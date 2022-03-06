import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { translate } from "../i18n"
import { ParterContactsScreen, PartnerContactDetails } from "../screens"

export type PartnerContactsNavigatorParamList = {
  overview: undefined
  details: { id }
}

const Stack = createNativeStackNavigator<PartnerContactsNavigatorParamList>()

export const PartnerContactsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="overview">
      <Stack.Screen
        name="overview"
        component={ParterContactsScreen}
        options={{ title: translate("screens.pa-contact-overview.title") }}
      />
      <Stack.Screen
        name="details"
        component={PartnerContactDetails}
        options={{ title: translate("screens.pa-contact-details.title") }}
      />
    </Stack.Navigator>
  )
}
