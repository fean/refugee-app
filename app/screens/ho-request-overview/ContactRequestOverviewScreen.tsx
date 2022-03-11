import * as React from "react"
import { FlatList, RefreshControl, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import Icon from "react-native-vector-icons/Ionicons"

import { ContactRequest, Typography } from "../../components"
import { HomeownerNavigatorParamList } from "../../navigators"
import { useStores } from "../../models"
import { translate } from "../../i18n"
import { color } from "../../theme"

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  icon: {
    marginBottom: 32,
  },
  list: {
    padding: 16,
  },
  publishedContainer: {
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  scrollView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
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

      {!contacts.length ? (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />

          <View style={styles.publishedContainer}>
            <Icon
              name="checkmark-circle-outline"
              style={styles.icon}
              size={72}
              color={color.palette.accept}
            />

            <Typography variant="text" align="center">
              {translate("screens.ho-contact-requests.published")}
            </Typography>
          </View>
        </ScrollView>
      ) : (
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
      )}
    </>
  )
})
