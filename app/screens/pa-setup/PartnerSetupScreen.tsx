import * as React from "react"
import { Dimensions, Platform, ScrollView, StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { withFormik } from "formik"
import Icon from "react-native-vector-icons/Ionicons"

import { NavigatorParamList } from "../../navigators"
import { translate } from "../../i18n"

import { NumericHeader } from "../../components/blocks/numeric-header-block/NumericHeader"
import { Button, Divider, TextButton } from "../../components"
import { color } from "../../theme"
import { Toolbar, toolbarHeight } from "../../components/base/toolbar/Toolbar"
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

type ScreenProps = StackScreenProps<NavigatorParamList, "ho-setup">

const { height } = Dimensions.get("screen")
const topSafeZone = Platform.select({
  ios: 40,
  android: 0,
})

const initialValue: FormValues = {
  details: { orgName: "", country: "", contact: "", phone: "", email: "", website: "" },
  location: { addressLine: "", postal: "", city: "", country: "" },
  motivation: { mission: "", motivation: "" },
}

const styles = StyleSheet.create({
  divider: {
    marginBottom: 24,
    marginTop: 32,
  },
  header: {
    marginBottom: 16,
  },
  lastBlock: {
    marginBottom: 80,
  },
  outerContainer: {
    flexDirection: "column",
  },
  scrollContainer: {
    flexDirection: "column",
    height: height - toolbarHeight - topSafeZone,
    left: 0,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 24,
    position: "absolute",
    right: 0,
    top: topSafeZone,
  },
  toolbar: {
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    position: "absolute",
    right: 0,
  },
  toolbarBtn: {
    width: 100,
  },
  topCover: {
    backgroundColor: color.palette.white,
    height: topSafeZone,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
})

const dividerColor = Platform.select({
  ios: color.palette.textDisabled,
  android: color.palette.control,
})

const PartnerSetupScreenComp: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topCover} />

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
      </ScrollView>

      <Toolbar style={styles.toolbar}>
        <TextButton
          icon={<Icon name="arrow-back" size={16} color={color.palette.text} />}
          tx="common.back"
          onPress={navigation.goBack}
        />

        <Button tx="common.next" style={styles.toolbarBtn} />
      </Toolbar>
    </>
  )
}

export const PartnerSetupScreen = withFormik<ScreenProps, FormValues>({
  handleSubmit: (values) => {
    /**/
  },
  mapPropsToValues: () => initialValue,
})(PartnerSetupScreenComp)
