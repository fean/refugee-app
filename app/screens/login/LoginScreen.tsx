import * as React from "react"
import * as Yup from "yup"
import { StackScreenProps } from "@react-navigation/stack"
import {
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  TextInput,
  View,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingViewProps,
} from "react-native"
import { FormikProps, withFormik } from "formik"

import * as theme from "../../theme"
import { NavigatorParamList } from "../../navigators"

import { Button, FormikInput, TextButton, Typography } from "../../components"

import { translate } from "../../i18n"
import { useStores } from "../../models"

type ScreenProps = StackScreenProps<NavigatorParamList, "login">

interface LoginValues {
  email: string
}

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  background: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  input: {
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    }),
    backgroundColor: theme.color.palette.control,
    borderRadius: theme.borderRadius.small,
  },
  inputContainer: {
    marginBottom: 32,
    marginTop: 16,
  },
  loginPanel: {
    backgroundColor: theme.color.palette.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    ...theme.shadows.cover,
  },
  noAccountSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 32,
  },
  root: {
    flexDirection: "column-reverse",
    height,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  signupButton: {
    color: theme.color.palette.europe,
    fontWeight: "bold",
    height: 24,
    paddingLeft: 4,
  },
  signupText: {
    color: theme.color.text,
    height: 24,
  },
  spinner: {
    marginRight: 8,
  },
})

const avoidanceBehavior: KeyboardAvoidingViewProps["behavior"] = Platform.select({
  ios: "padding",
  android: "height",
})

const LoginScreenComp: React.FC<ScreenProps & FormikProps<LoginValues>> = ({
  navigation,
  isValid,
  values: { email },
}) => {
  const { userStore } = useStores()
  const emailRef = React.useRef<TextInput>()
  const { current: opacityAnim } = React.useRef(new Animated.Value(0))

  const [errorMessage, setError] = React.useState<string>(null)
  const [isLoading, setLoading] = React.useState(false)

  const handleLogin = React.useCallback(() => {
    emailRef.current?.blur()
    setError(null)
    setLoading(true)

    userStore
      .doSendEmail(email)
      .then(() => {
        setLoading(false)
        navigation.navigate("otp")
      })
      .catch(() => {
        setLoading(false)
        setError(translate("screens.login.account-not-exists"))
      })
  }, [userStore, email])

  const handleNewUser = React.useCallback(() => {
    navigation.navigate("intro")
  }, [navigation])

  React.useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 120,
      useNativeDriver: true,
    }).start()
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="#005099" />
      <KeyboardAvoidingView behavior={avoidanceBehavior} style={styles.root}>
        <Image source={{ uri: "splash" }} style={styles.background} />

        <Animated.View style={[styles.loginPanel, { opacity: opacityAnim }]}>
          <Typography variant="title">{translate("screens.login.title")}</Typography>

          <FormikInput
            ref={emailRef}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
            icon="mail"
            error={errorMessage}
            style={styles.inputContainer}
            inputContainerStyle={styles.input}
            placeholder={translate("screens.login.emailPlaceholder")}
          />

          <Button
            disabled={isLoading || !isValid}
            tx="screens.login.login"
            icon={
              isLoading && (
                <ActivityIndicator
                  style={styles.spinner}
                  size="small"
                  color={theme.color.palette.white}
                />
              )
            }
            onPress={handleLogin}
          />

          <View style={styles.noAccountSection}>
            <Typography style={styles.signupText} variant="button">
              {translate("screens.login.no-account")}
            </Typography>
            <TextButton
              textStyle={styles.signupButton}
              tx="screens.login.signup"
              onPress={handleNewUser}
            />
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  )
}

export const LoginScreen = withFormik<ScreenProps, LoginValues>({
  validateOnMount: true,
  validationSchema: Yup.object({
    email: Yup.string().email().required(),
  }),
  mapPropsToValues() {
    return { email: "" }
  },
  handleSubmit() {
    /**/
  },
})(LoginScreenComp)
