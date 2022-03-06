/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { FlatList, StatusBar, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import sub from "date-fns/sub"

import { PartnerContact } from "../../components"
import { PartnerContactsNavigatorParamList } from "../../navigators"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  list: {
    padding: 16,
  },
})

export const partnerContacts = [
  {
    id: "1234",
    geo: {
      latitude: 52.3724599,
      longitude: 4.8795857,
    },
    state: "pending" as "pending",
    date: sub(new Date(), { hours: 3 }),
    name: "Johnny Samaritan",
    phone: "+31612345678",
    email: "johhny@gmail.com",
    address: "Rozenstraat 112-III",
    postal: "1016 NZ",
    city: "Amsterdam",
    country: "nl",
    beds: 2,
  },
  {
    id: "4321",
    geo: {
      latitude: 52.3790557,
      longitude: 4.6348468,
    },
    state: "approved" as "approved",
    date: sub(new Date(), { days: 2 }),
    name: "Jenny Goodheart",
    address: "Frankestraat 42",
    postal: "2011 HV",
    city: "Haarlem",
    country: "nl",
    phone: "+31623833605",
    email: "jenny.goodheart@gmail.com",
    beds: 1,
  },
  {
    id: "12345",
    geo: {
      latitude: 52.3124588,
      longitude: 5.0315648,
    },
    state: "approved" as "approved",
    date: sub(new Date(), { days: 3 }),
    name: "Johnny Samaritan",
    phone: "+31612345678",
    email: "johhny@gmail.com",
    address: "Aertjanssenstraat 6",
    postal: "1382 EE",
    city: "Weesp",
    country: "nl",
    beds: 3,
  },
]

export const ParterContactsScreen: React.FC<
  StackScreenProps<PartnerContactsNavigatorParamList, "overview">
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
        data={partnerContacts}
        renderItem={({ item, index }) => (
          <PartnerContact
            disabled={item.state === "pending"}
            style={styles.card}
            {...item}
            onPress={handleDetailNav}
          />
        )}
      />
    </>
  )
}
