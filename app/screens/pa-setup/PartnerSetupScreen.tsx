import * as React from "react"
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { withFormik } from "formik"

import { NavigatorParamList } from "../../navigators"
import { translate } from "../../i18n"

import { NumericHeader } from "../../components/blocks/numeric-header-block/NumericHeader"
import { Button, Divider } from "../../components"
import { color } from "../../theme"
import { PartnerDetails } from "../../components/blocks/partner-details-block/PartnerDetails"
import { HomeownerLocation } from "../../components/blocks/homeowner-location-block/HomeownerLocation"
import { PartnerMotivation } from "../../components/blocks/partner-motivation-block/PartnerMotivation"

interface FormValues {
  details: {
    contact: string
    orgName: string
    email: string
    country: string
    phone: string
    website: string
  }
  location: {
    addressLine: string
    postal: string
    city: string
    country: string
  }
  motivation: {
    mission: string
    motivation: string
  }
}

type ScreenProps = StackScreenProps<NavigatorParamList, "pa-setup">

const initialValue: FormValues = {
  details: { orgName: "", country: "", contact: "", phone: "", email: "", website: "" },
  location: { addressLine: "", postal: "", city: "", country: "" },
  motivation: { mission: "", motivation: "" },
}

const styles = StyleSheet.create({
  btn: {
    height: 40,
    marginBottom: 64,
  },
  divider: {
    marginBottom: 24,
    marginTop: 32,
  },
  header: {
    marginBottom: 16,
  },
  lastBlock: {
    marginBottom: 40,
  },
  scrollContainer: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
  },
})

const dividerColor = Platform.select({
  ios: color.palette.textDisabled,
  android: color.palette.control,
})

const PartnerSetupScreenComp: React.FC<ScreenProps> = ({ navigation }) => {
  const handleCreate = React.useCallback(() => {
    navigation.navigate("partner")
  }, [navigation])

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="never"
          scrollToOverflowEnabled
          style={styles.scrollContainer}
        >
          <NumericHeader
            style={styles.header}
            option="1"
            title={translate("screens.pa-setup.1-title")}
            text={translate("screens.pa-setup.1-text")}
          />

          <PartnerDetails blockName="details" />

          <Divider style={styles.divider} color={dividerColor} />

          <NumericHeader
            style={styles.header}
            option="2"
            title={translate("screens.pa-setup.2-title")}
            text={translate("screens.pa-setup.2-text")}
          />

          <HomeownerLocation blockName="location" />

          <Divider style={styles.divider} color={dividerColor} />

          <NumericHeader
            style={styles.header}
            option="3"
            title={translate("screens.pa-setup.3-title")}
            text={translate("screens.pa-setup.3-text")}
          />

          <PartnerMotivation style={styles.lastBlock} blockName="motivation" />

          <Button tx="common.next" style={styles.btn} onPress={handleCreate} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export const PartnerSetupScreen = withFormik<ScreenProps, FormValues>({
  handleSubmit: (values) => {
    /**/
  },
  mapPropsToValues: () => initialValue,
})(PartnerSetupScreenComp)
