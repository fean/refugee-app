import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"

import {
  HomeownerSetupScreen,
  IntroScreen,
  PartnerSetupScreen,
  LoginScreen,
  PartnerApprovalScreen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
import { translate } from "../i18n"

import { HomeownerTabsNavigator } from "./homeowner-tabs-navigator"
import { PartnerTabsNavigator } from "./partner-tabs-navigator"
import { OTPScreen } from "../screens/otp/OTPScreen"
import { useStores } from "../models"

export type NavigatorParamList = {
  intro: undefined
  "ho-setup": undefined
  "pa-setup": undefined
  otp: undefined
  login: undefined
  homeowner: undefined
  partner: undefined
  approval: undefined
}

const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = observer(() => {
  const { userStore } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      {!userStore.isLoggedIn && (
        <>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen
            name="otp"
            component={OTPScreen}
            options={{ title: translate("screens.otp.title"), headerShown: true }}
          />
          <Stack.Screen 
            name="intro" 
            component={IntroScreen} 
            options={{ headerShown: true }}
          />
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
        </>
      )}

      {userStore.isLoggedIn && userStore.user.type === "Homeowner" && (
        <Stack.Screen name="homeowner" component={HomeownerTabsNavigator} />
      )}
      {userStore.isLoggedIn &&
        userStore.user.type === "Partner" &&
        userStore.user.state === "Active" && (
          <Stack.Screen name="partner" component={PartnerTabsNavigator} />
        )}
      {userStore.isLoggedIn &&
        userStore.user.type === "Partner" &&
        userStore.user.state === "Inactive" && (
          <Stack.Screen name="approval" component={PartnerApprovalScreen} />
        )}
    </Stack.Navigator>
  )
})

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
