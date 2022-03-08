import * as React from "react"
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
} from "react-native"
import { withFormik } from "formik"

import { color } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { shadows } from "../../theme/shadows"

import { Button, FormikInput, TextButton, Typography } from "../../components"

import { translate } from "../../i18n"

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
    backgroundColor: color.palette.control,
    borderRadius: 5,
    marginBottom: 32,
    marginTop: 16,
  },
  loginPanel: {
    backgroundColor: color.palette.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    left: 0,
    opacity: 0,
    paddingBottom: 48,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    position: "absolute",
    right: 0,
    ...shadows.cover,
  },
  noAccountSection: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 32,
  },
  root: {
    height,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  signupButton: {
    color: color.palette.europe,
    fontWeight: "bold",
    height: 24,
    paddingLeft: 4,
  },
  signupText: {
    color: color.text,
    height: 24,
  },
})

const LoginScreenComp: React.FC<ScreenProps> = ({ navigation }) => {
  const emailRef = React.useRef<TextInput>()
  const { current: opacityAnim } = React.useRef(new Animated.Value(0))

  const handleLogin = React.useCallback(() => {
    emailRef.current?.blur()
  }, [])

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
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <StatusBar barStyle="light-content" translucent backgroundColor={color.primary} />
      <Image source={{ uri: "splash" }} style={styles.background} />

      <Animated.View style={[styles.loginPanel, { opacity: opacityAnim }]}>
        <Typography variant="title">{translate("screens.login.title")}</Typography>

        <FormikInput
          ref={emailRef}
          autoComplete="email"
          keyboardType="email-address"
          name="email"
          icon="mail"
          style={styles.input}
          placeholder={translate("screens.login.emailPlaceholder")}
        />

        <Button tx="screens.login.login" onPress={handleLogin} />

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
  )
}

export const LoginScreen = withFormik<ScreenProps, LoginValues>({
  mapPropsToValues() {
    return { email: "" }
  },
  handleSubmit() {
    /**/
  },
})(LoginScreenComp)
