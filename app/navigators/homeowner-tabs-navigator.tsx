/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { TabBarIcon } from "../components"
import { color } from "../theme"
import { HomeownerContactsNavigator } from "./homeowner-contacts-navigator"
import { translate } from "../i18n"
import { HomeownerProfileScreen } from "../screens"

export type HomeownerTabsNavigatorParamList = {
  contacts: undefined
  profile: undefined
}

const Tab = createBottomTabNavigator<HomeownerTabsNavigatorParamList>()

const tabIcons = {
  contacts: "chatbubbles-outline",
  profile: "reader-outline",
}

export const HomeownerTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon focused={focused} icon={tabIcons[route.name]} color={color} size={size} />
        ),
        tabBarActiveTintColor: color.palette.europe,
        tabBarInactiveTintColor: color.palette.europeShade,
      })}
    >
      <Tab.Screen name="contacts" component={HomeownerContactsNavigator} />
      <Tab.Screen
        name="profile"
        component={HomeownerProfileScreen}
        options={{ headerShown: true, title: translate("screens.ho-profile.title") }}
      />
    </Tab.Navigator>
  )
}
