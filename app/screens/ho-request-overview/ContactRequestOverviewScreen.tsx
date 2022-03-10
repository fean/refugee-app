import * as React from "react"
import { FlatList, RefreshControl, StatusBar, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import { ContactRequest } from "../../components"
import { HomeownerNavigatorParamList } from "../../navigators"
import { useStores } from "../../models"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  list: {
    padding: 16,
  },
})

export const ContactRequestOverviewScreen: React.FC<
  StackScreenProps<HomeownerNavigatorParamList, "overview">
> = observer(({ navigation }) => {
  const [isLoading, setLoading] = React.useState(false)
  const { contactStore } = useStores()
  const { contacts } = contactStore

  const handleDetailNav = React.useCallback(
    (id: string) => navigation.navigate("details", { id }),
    [navigation],
  )

  const handleRefresh = React.useCallback(() => {
    setLoading(true)

    contactStore.loadContacts().then(() => setLoading(false))
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <FlatList
        style={styles.list}
        data={contacts}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />}
        renderItem={({ item }) => (
          <ContactRequest
            style={styles.card}
            id={item.id}
            date={item.date as Date}
            name={item.name}
            state={item.state}
            mission={item.mission}
            onPress={handleDetailNav}
          />
        )}
      />
    </>
  )
})
