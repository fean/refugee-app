/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { FlatList, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import sub from "date-fns/sub"

import { ContactRequest } from "../../components"
import { HomeownerNavigatorParamList } from "../../navigators"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  lastCard: {
    marginBottom: 64,
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
    mission:
      "We are an awesome NGO that helps find refugees a place in Europe to temporarily stay.",
  },
  {
    id: "4321",
    state: "approved" as "approved",
    date: sub(new Date(), { days: 1 }),
    name: "Awesome NGO 2",
    mission:
      "We are an awesome NGO that helps find refugees a place in Europe to temporarily stay.",
  },
]

export const ContactRequestOverviewScreen: React.FC<
  StackScreenProps<HomeownerNavigatorParamList, "contact-overview">
> = ({ navigation }) => {
  const handleDetailNav = React.useCallback(
    (id: string) => navigation.navigate("contact-details", { id }),
    [navigation],
  )

  return (
    <FlatList
      style={styles.list}
      data={requests}
      renderItem={({ item, index }) => (
        <ContactRequest
          style={[styles.card, requests.length === index + 1 && styles.lastCard]}
          {...item}
          onPress={handleDetailNav}
        />
      )}
    />
  )
}
