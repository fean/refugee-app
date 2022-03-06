/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeownerSetupScreen, IntroScreen, PartnerSetupScreen, LoginScreen } from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { translate } from "../i18n"

import { HomeownerTabsNavigator } from "./homeowner-tabs-navigator"

export type NavigatorParamList = {
  intro: undefined
  "ho-setup": undefined
  "pa-setup": undefined
  login: undefined
  homeowner: undefined
}

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen
        name="ho-setup"
        component={HomeownerSetupScreen}
        options={{ title: translate("screens.ho-setup.title"), headerShown: true }}
      />
      <Stack.Screen
        name="pa-setup"
        component={PartnerSetupScreen}
        options={{ title: translate("screens.pa-setup.title"), headerShown: true }}
      />

      <Stack.Screen name="homeowner" component={HomeownerTabsNavigator} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(canExit)

  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} {...props}>
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["login", "contact-overview"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
