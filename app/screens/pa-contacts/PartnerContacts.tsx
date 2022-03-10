/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { FlatList, RefreshControl, StatusBar, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { PartnerContact } from "../../components"
import { PartnerContactsNavigatorParamList } from "../../navigators"
import { useStores } from "../../models"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  list: {
    padding: 16,
  },
})

export const ParterContactsScreen: React.FC<
  StackScreenProps<PartnerContactsNavigatorParamList, "overview">
> = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(false)
  const { contactStore } = useStores()
  const { contacts } = contactStore

  const handleDetailNav = React.useCallback(
    (id: string) => navigation.navigate("details", { id }),
    [navigation],
  )

  const handleRefresh = React.useCallback(() => {
    setLoading(true)

    contactStore
      .loadContacts()
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [contactStore])

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
        style={styles.list}
        data={contacts}
        renderItem={({ item }) => (
          <PartnerContact
            disabled={item.state === "Pending"}
            style={styles.card}
            id={item.id}
            state={item.state}
            date={item.date as Date}
            name={item.name}
            address={item.location.address}
            postal={item.location.postal}
            city={item.location.city}
            beds={item.location.nrBeds}
            onPress={handleDetailNav}
          />
        )}
      />
    </>
  )
}
