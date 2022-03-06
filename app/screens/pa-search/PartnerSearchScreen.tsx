/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { StatusBar, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { PartnerTabsTabsNavigatorParamList } from "../../navigators"

export const PartnerSearchScreen: React.FC<
  StackScreenProps<PartnerTabsTabsNavigatorParamList, "search">
> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View />
    </>
  )
}
