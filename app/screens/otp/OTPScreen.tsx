import * as React from "react"
import * as Yup from "yup"
import { StackScreenProps } from "@react-navigation/stack"
import {
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  View,
  ActivityIndicator,
  Alert,
} from "react-native"
import { FormikProps, withFormik } from "formik"

import { color } from "../../theme"
import { NavigatorParamList } from "../../navigators"

import { Button, FormikOTPInput, Typography } from "../../components"

import { translate } from "../../i18n"
import { useStores } from "../../models"

type ScreenProps = StackScreenProps<NavigatorParamList, "login">

interface LoginValues {
  otp: string
}

const styles = StyleSheet.create({
  otp: {
    marginBottom: 64,
    marginTop: 32,
  },
  root: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  spinner: {
    marginRight: 8,
  },
  titleContainer: {
    marginTop: 64,
  },
  verifyButton: {
    bottom: 40,
    left: 16,
    position: "absolute",
    right: 16,
  },
})

const OTPScreenComp: React.FC<ScreenProps & FormikProps<LoginValues>> = ({
  navigation,
  isValid,
  resetForm,
  values: { otp },
}) => {
  const { userStore, contactStore } = useStores()
  const emailRef = React.useRef<TextInput>()

  const [isLoading, setLoading] = React.useState(false)

  const handleLogin = React.useCallback(() => {
    emailRef.current?.blur()
    setLoading(true)

    const handleError = (error) => {
      console.error(error)

      setLoading(false)
      resetForm()

      Alert.alert(translate("screens.otp.error-title"), translate("screens.otp.error-details"), [
        {
          style: "cancel",
          text: translate("common.back"),
          onPress: () => navigation.navigate("login"),
        },
      ])
    }

    userStore
      .doAuthenticate(otp)
      .then(() => {
        userStore
          .loadProfile()
          .then((profile) => {
            if (profile.state === "Active") {
              contactStore
                .loadContacts()
                .then(() => userStore.saveIsLoggedIn(true))
                .catch(handleError)
            } else {
              userStore.saveIsLoggedIn(true)
            }
          })
          .catch(handleError)
      })
      .catch(handleError)
  }, [userStore, otp, navigation, resetForm])

  React.useEffect(() => {
    if (otp?.length === 6) {
      handleLogin()
    }
  }, [handleLogin, otp])

  return (
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={color.primary} />

      <View style={styles.titleContainer}>
        <Typography variant="text" align="center">
          {translate("screens.otp.sent-message-1")}
        </Typography>
        <Typography variant="text" align="center">
          {translate("screens.otp.sent-message-2", { email: userStore.email })}
        </Typography>
      </View>

      <FormikOTPInput name="otp" style={styles.otp} disabled={isLoading} />

      <Typography variant="text" align="center">
        {translate("screens.otp.try-again")}
      </Typography>

      <Button
        disabled={!isValid || isLoading}
        tx="screens.otp.verify"
        icon={isLoading && <ActivityIndicator style={styles.spinner} size="small" />}
        style={styles.verifyButton}
        onPress={handleLogin}
      />
    </KeyboardAvoidingView>
  )
}

export const OTPScreen = withFormik<ScreenProps, LoginValues>({
  validateOnMount: true,
  validationSchema: Yup.object({
    otp: Yup.string().min(6).required(),
  }),
  mapPropsToValues() {
    return { otp: "" }
  },
  handleSubmit() {
    /**/
  },
})(OTPScreenComp)
