import * as React from "react"
import { ActivityIndicator, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { FormikProps, withFormik } from "formik"
import * as Yup from "yup"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { NavigatorParamList } from "../../navigators"
import { translate } from "../../i18n"

import {
  HomeownerLocation,
  HomeownerPlace,
  Button,
  Divider,
  HomeownerDetails,
  NumericHeader,
} from "../../components"
import { color } from "../../theme"
import { useStores } from "../../models"
import { handleError } from "./helpers"

export interface HomeownerFormValues {
  details: {
    fullName: string
    email: string
    country: string
    phone: string
  }
  location: {
    address: string
    postal: string
    city: string
    country: string
  }
  place: {
    type: "Lease" | "Owner" | null
    beds: number | null
  }
}

type ScreenProps = StackScreenProps<NavigatorParamList, "ho-setup">

const initialValue: HomeownerFormValues = {
  details: { country: "", fullName: "", phone: "", email: "" },
  location: { address: "", postal: "", city: "", country: "" },
  place: { type: null, beds: null },
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

const HomeownerSetupScreenComp: React.FC<ScreenProps & FormikProps<HomeownerFormValues>> = ({
  navigation,
  values,
  isValid,
}) => {
  const [isWorking, setWorking] = React.useState(false)
  const { userStore } = useStores()
  const handleCreate = React.useCallback(async () => {
    setWorking(true)
    try {
      await userStore.createHomeowner(values)
      await userStore.doSendEmail(values.details.email)

      navigation.navigate("otp")
    } catch (error) {
      handleError(error.message)
      setWorking(false)
    }
  }, [navigation, userStore, values])

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView>
          <NumericHeader
            style={styles.header}
            option="1"
            title={translate("screens.ho-setup.1-title")}
            text={translate("screens.ho-setup.1-text")}
          />

          <HomeownerDetails blockName="details" />

          <Divider style={styles.divider} color={dividerColor} />

          <NumericHeader
            style={styles.header}
            option="2"
            title={translate("screens.ho-setup.2-title")}
            text={translate("screens.ho-setup.2-text")}
          />

          <HomeownerLocation blockName="location" />

          <Divider style={styles.divider} color={dividerColor} />

          <NumericHeader
            style={styles.header}
            option="3"
            title={translate("screens.ho-setup.3-title")}
            text={translate("screens.ho-setup.3-text")}
          />

          <HomeownerPlace blockName="place" style={styles.lastBlock} />

          <Button
            disabled={!isValid || isWorking}
            tx="common.next"
            icon={isWorking && <ActivityIndicator style={styles.spinner} size="small" />}
            style={styles.btn}
            onPress={handleCreate}
          />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  )
}

export const HomeownerSetupScreen = withFormik<ScreenProps, HomeownerFormValues>({
  validateOnMount: true,
  validationSchema: Yup.object({
    details: Yup.object({
      fullName: Yup.string().required(),
      email: Yup.string().email().required(),
      country: Yup.string().required(),
      phone: Yup.string().required(),
    }),
    location: Yup.object({
      address: Yup.string().required(),
      postal: Yup.string().required(),
      city: Yup.string().required(),
      country: Yup.string().required(),
    }),
    place: Yup.object({
      type: Yup.string().required(),
      beds: Yup.number().required(),
    }),
  }),
  handleSubmit: () => {
    /**/
  },
  mapPropsToValues: () => initialValue,
})(HomeownerSetupScreenComp)
