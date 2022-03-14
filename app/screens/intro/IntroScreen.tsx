import * as React from "react"
import { ScrollView, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

import { NavigatorParamList } from "../../navigators"
import { PanelButton, Typography, NumericHeader } from "../../components"
import { translate } from "../../i18n"
import * as theme from "../../theme"

const styles = StyleSheet.create({
  btn: {
    marginBottom: 24,
  },
  btnContainer: {
    flexDirection: "column",
    marginBottom: 32,
  },
  getStarted: {
    marginBottom: 32,
    marginTop: 32,
  },
  scrollContainer: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  textBlock: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 32,
    marginTop: 32,
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar barStyle="dark-content" animated backgroundColor={theme.color.palette.white} />

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
          iconColor={theme.color.palette.europe}
          style={styles.btn}
          text={translate("screens.intro.homeowner")}
          onPress={handleSetupHomeowner}
        />
        <PanelButton
          icon="heart"
          iconColor={theme.color.palette.love}
          text={translate("screens.intro.partner")}
          onPress={handleSetupPartner}
        />
      </View>
    </ScrollView>
  )
}
