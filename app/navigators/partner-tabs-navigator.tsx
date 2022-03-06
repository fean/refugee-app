import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { color } from "../theme"
import { translate } from "../i18n"

import { TabBarIcon } from "../components"
import { PartnerContactsNavigator } from "./partner-contacts-navigator"

export type PartnerTabsTabsNavigatorParamList = {
  search: undefined
  contacts: undefined
  profile: undefined
}

const Tab = createBottomTabNavigator<PartnerTabsTabsNavigatorParamList>()

const tabIcons = {
  search: "search-outline",
  contacts: "people-circle-outline",
  profile: "reader-outline",
}

const TempComp = () => null

export const PartnerTabsNavigator = () => (
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
    <Tab.Screen name="search" component={TempComp} />
    <Tab.Screen name="contacts" component={PartnerContactsNavigator} />
    <Tab.Screen
      name="profile"
      component={TempComp}
      options={{ headerShown: true, title: translate("screens.pa-profile.title") }}
    />
  </Tab.Navigator>
)
