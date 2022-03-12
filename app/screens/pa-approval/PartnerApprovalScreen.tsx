import * as React from "react"
import {
  Image,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import * as theme from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { Typography } from "../../components"
import { translate } from "../../i18n"
import { useStores } from "../../models"

const styles = StyleSheet.create({
  image: {
    height: 300,
    marginTop: 80,
    width: 300,
  },
  lastBlock: {
    marginTop: 16,
  },
  scrollContainer: {
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 16,
    marginTop: 8,
  },
})

const refreshControlColor = Platform.select({
  ios: undefined,
  android: theme.color.palette.europe,
})

export const PartnerApprovalScreen: React.FC<StackScreenProps<NavigatorParamList, "approval">> = ({
  navigation,
}) => {
  const { userStore } = useStores()
  const [isLoading, setLoading] = React.useState(false)

  const handleRefresh = React.useCallback(() => {
    setLoading(true)
    userStore
      .loadProfile()
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [userStore])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <RefreshControl
        refreshing={isLoading}
        onRefresh={handleRefresh}
        tintColor={refreshControlColor}
      />

      <StatusBar barStyle="dark-content" />

      <Image style={styles.image} source={{ uri: "requestreceived" }} />

      <View style={styles.textContainer}>
        <Typography variant="header" align="center" style={styles.title}>
          {translate("screens.pa-approval.title")}
        </Typography>
        <Typography variant="text" align="left">
          {translate("screens.pa-approval.text-1")}
        </Typography>
        <Typography variant="text" align="left" style={styles.lastBlock}>
          {translate("screens.pa-approval.text-2")}
        </Typography>
        <Typography variant="text" align="left" style={styles.lastBlock} color="shade">
          {translate("screens.pa-approval.text-3")}
        </Typography>
      </View>
    </ScrollView>
  )
}
