import * as React from "react"
import { ScrollView, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "../../navigators"
import { PanelButton, Typography } from "../../components"
import { translate } from "../../i18n"
import { NumericHeader } from "../../components/blocks/numeric-header-block/NumericHeader"

const styles = StyleSheet.create({
  btn: {
    marginBottom: 24,
  },
  btnContainer: {
    flexDirection: "column",
  },
  scrollContainer: {
    flexDirection: "column",
    paddingLeft: 32,
    paddingRight: 32,
  },
  getStarted: {
    marginBottom: 32,
    marginTop: 32,
  },
  textBlock: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 32,
    marginTop: 60,
  },
})

export const IntroScreen: React.FC<StackScreenProps<NavigatorParamList, "intro">> = ({
  navigation,
}) => {
  const handleSetupHomeowner = React.useCallback(() => navigation.navigate("ho-setup"), [
    navigation,
  ])

  const handleSetupPartner = React.useCallback(() => navigation.navigate("pa-setup"), [navigation])

  return (
    <ScrollView style={styles.scrollContainer}>
      <StatusBar barStyle="dark-content" />

      <Typography variant="title" style={styles.title}>
        {translate("screens.intro.how-it-works")}
      </Typography>

      <NumericHeader
        option="1"
        style={styles.textBlock}
        title={translate("screens.intro.option-1-title")}
        text={translate("screens.intro.option-1-text")}
      />

      <NumericHeader
        option="2"
        style={styles.textBlock}
        title={translate("screens.intro.option-2-title")}
        text={translate("screens.intro.option-2-text")}
      />

      <NumericHeader
        option="3"
        style={styles.textBlock}
        title={translate("screens.intro.option-3-title")}
        text={translate("screens.intro.option-3-text")}
      />

      <NumericHeader
        option="4"
        title={translate("screens.intro.option-4-title")}
        text={translate("screens.intro.option-4-text")}
      />

      <Typography variant="title" style={styles.getStarted}>
        {translate("screens.intro.get-started")}
      </Typography>

      <View style={styles.btnContainer}>
        <PanelButton
          icon="home"
          style={styles.btn}
          text={translate("screens.intro.homeowner")}
          onPress={handleSetupHomeowner}
        />
        <PanelButton
          icon="business"
          text={translate("screens.intro.partner")}
          onPress={handleSetupPartner}
        />
      </View>
    </ScrollView>
  )
}
