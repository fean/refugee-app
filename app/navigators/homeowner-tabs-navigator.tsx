import React from "react"
import { Alert, StyleSheet, TouchableOpacity } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons"

import { TabBarIcon } from "../components"
import { color } from "../theme"
import { HomeownerContactsNavigator } from "./homeowner-contacts-navigator"
import { translate } from "../i18n"
import { HomeownerProfileScreen } from "../screens"
import { useStores } from "../models"

export type HomeownerTabsNavigatorParamList = {
  contacts: undefined
  profile: undefined
}

const Tab = createBottomTabNavigator<HomeownerTabsNavigatorParamList>()

const tabIcons = {
  contacts: "chatbubbles-outline",
  profile: "reader-outline",
}

const styles = StyleSheet.create({
  deleteBtn: {
    marginRight: 8,
  },
})

export const HomeownerTabsNavigator = () => {
  const { userStore } = useStores()

  const handleDelete = React.useCallback(() => {
    Alert.alert(
      translate("screens.ho-profile.deleteTitle"),
      translate("screens.ho-profile.deleteMessage"),
      [
        {
          style: "destructive",
          text: translate("screens.ho-profile.deleteAction"),
          onPress: () => userStore.deleteMe(),
        },
        {
          style: "cancel",
          text: translate("common.cancel"),
        },
      ],
    )
  }, [])

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
        options={{
          headerShown: true,
          title: translate("screens.ho-profile.title"),
          headerRight: () => (
            <TouchableOpacity>
              <Icon
                name="trash"
                size={24}
                style={styles.deleteBtn}
                onPress={handleDelete}
                color={color.palette.error}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  )
}
