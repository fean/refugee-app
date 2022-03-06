/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { translate } from "../i18n"

import { ContactRequestOverviewScreen } from "../screens"
import { TabBarIcon } from "../components"
import { color } from "../theme"

export type HomeownerNavigatorParamList = {
  "contact-overview": undefined
  "contact-details": { id: string }
}

const Tab = createBottomTabNavigator<HomeownerNavigatorParamList>()

const tabIcons = {
  "contact-overview": "chatbubbles-outline",
}

export const HomeownerNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon focused={focused} icon={tabIcons[route.name]} color={color} size={size} />
        ),
        tabBarActiveTintColor: color.palette.europe,
        tabBarInactiveTintColor: color.palette.europeShade,
      })}
    >
      <Tab.Screen
        name="contact-overview"
        component={ContactRequestOverviewScreen}
        options={{ title: translate("screens.ho-contact-requests.title") }}
      />
    </Tab.Navigator>
  )
}
