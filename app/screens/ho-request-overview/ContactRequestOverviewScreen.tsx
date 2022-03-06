/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { FlatList, StatusBar, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import sub from "date-fns/sub"

import { ContactRequest } from "../../components"
import { HomeownerNavigatorParamList } from "../../navigators"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  list: {
    padding: 16,
  },
})

export const requests = [
  {
    id: "1234",
    state: "pending" as "pending",
    date: sub(new Date(), { hours: 2 }),
    name: "Awesome NGO",
    address: "Prinsengracht 2",
    postal: "1722GM",
    city: "Zuid-scharwoude",
    country: "nl",
    phone: "+31623833605",
    email: "leonard@trunkrs.nl",
    website: "https://samaritan-app.eu",
    mission:
      "We are an awesome NGO that helps find refugees a place in Europe to temporarily stay.",
  },
  {
    id: "4321",
    state: "approved" as "approved",
    date: sub(new Date(), { days: 1 }),
    name: "Awesome NGO 2",
    address: "Prinsengracht 2",
    postal: "1722GM",
    city: "Zuid-scharwoude",
    country: "nl",
    phone: "+31623833605",
    email: "leonard@trunkrs.nl",
    website: "https://samaritan-app.eu",
    mission:
      "We are an awesome NGO that helps find refugees a place in Europe to temporarily stay.",
  },
]

export const ContactRequestOverviewScreen: React.FC<
  StackScreenProps<HomeownerNavigatorParamList, "overview">
> = ({ navigation }) => {
  const handleDetailNav = React.useCallback(
    (id: string) => navigation.navigate("details", { id }),
    [navigation],
  )

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <FlatList
        style={styles.list}
        data={requests}
        renderItem={({ item, index }) => (
          <ContactRequest style={styles.card} {...item} onPress={handleDetailNav} />
        )}
      />
    </>
  )
}
