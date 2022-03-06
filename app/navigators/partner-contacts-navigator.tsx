import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { translate } from "../i18n"

export type PartnerContactsNavigatorParamList = {
  overview: undefined
  details: { id }
}

const Stack = createNativeStackNavigator<PartnerContactsNavigatorParamList>()

const TempComp = () => null

export const PartnerContactsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="overview">
      <Stack.Screen
        name="overview"
        component={TempComp}
        options={{ title: translate("screens.pa-contact-overview.title") }}
      />
      <Stack.Screen
        name="details"
        component={TempComp}
        options={{ title: translate("screens.pa-contact-details.title") }}
      />
    </Stack.Navigator>
  )
}
