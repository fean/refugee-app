import * as React from "react"
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { FormikProps, withFormik } from "formik"
import * as Yup from "yup"

import { NavigatorParamList } from "../../navigators"
import { translate } from "../../i18n"

import {
  Button,
  Divider,
  PartnerMotivation,
  NumericHeader,
  HomeownerLocation,
  PartnerDetails,
} from "../../components"
import { color } from "../../theme"
import { useStores } from "../../models"
import { handleError } from "./helpers"

export interface PartnerFormValues {
  details: {
    contactName: string
    orgName: string
    email: string
    country: string
    phone: string
    website: string
  }
  location: {
    address: string
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

const initialValue: PartnerFormValues = {
  details: { orgName: "", country: "", contactName: "", phone: "", email: "", website: "" },
  location: { address: "", postal: "", city: "", country: "" },
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
  spinner: {
    marginRight: 8,
  },
})

const dividerColor = Platform.select({
  ios: color.palette.textDisabled,
  android: color.palette.control,
})

const PartnerSetupScreenComp: React.FC<ScreenProps & FormikProps<PartnerFormValues>> = ({
  navigation,
  isValid,
  values,
}) => {
  const [isWorking, setWorking] = React.useState(false)
  const { userStore } = useStores()
  const handleCreate = React.useCallback(async () => {
    setWorking(true)
    try {
      await userStore.createPartner(values)
      await userStore.doSendEmail(values.details.email)

      navigation.navigate("otp")
    } catch (error) {
      handleError(error.message)
      setWorking(false)
    }
  }, [navigation, userStore, values])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

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

          <Button
            disabled={!isValid || isWorking}
            tx="common.next"
            icon={isWorking && <ActivityIndicator style={styles.spinner} size="small" />}
            style={styles.btn}
            onPress={handleCreate}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export const PartnerSetupScreen = withFormik<ScreenProps, PartnerFormValues>({
  validateOnMount: true,
  validationSchema: Yup.object({
    details: Yup.object({
      contactName: Yup.string().required(),
      orgName: Yup.string().required(),
      email: Yup.string().email().required(),
      country: Yup.string().required(),
      phone: Yup.string().required(),
      website: Yup.string().required(),
    }),
    location: Yup.object({
      address: Yup.string().required(),
      postal: Yup.string().required(),
      city: Yup.string().required(),
      country: Yup.string().required(),
    }),
    motivation: Yup.object({
      mission: Yup.string().max(90).required(),
      motivation: Yup.string().required(),
    }),
  }),
  handleSubmit: (values) => {
    /**/
  },
  mapPropsToValues: () => initialValue,
})(PartnerSetupScreenComp)
