import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ContactRequestDetailsScreen, ContactRequestOverviewScreen } from "../screens"
import { translate } from "../i18n"

export type HomeownerNavigatorParamList = {
  overview: undefined
  details: { id }
}

const Stack = createNativeStackNavigator<HomeownerNavigatorParamList>()

export const HomeownerContactsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="overview">
      <Stack.Screen
        name="overview"
        component={ContactRequestOverviewScreen}
        options={{ title: translate("screens.ho-contact-requests.title") }}
      />
      <Stack.Screen
        name="details"
        component={ContactRequestDetailsScreen}
        options={{ title: translate("screens.ho-contact-details.title") }}
      />
    </Stack.Navigator>
  )
}
