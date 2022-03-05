import React, { ErrorInfo } from "react"
import { TextStyle, View, ViewStyle, ScrollView } from "react-native"
import { color } from "../../theme"
import { Button, Typography } from "../../components"
import { translate } from "../../i18n"

const CONTAINER: ViewStyle = {
  alignItems: "center",
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: color.background,
}

const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: "100%",
  maxHeight: "60%",
  backgroundColor: color.line,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
}

const BTN_RESET: ViewStyle = {
  paddingHorizontal: 40,

  backgroundColor: color.primary,
}

const TITLE_ERROR: TextStyle = {
  color: color.error,
}

const FRIENDLY_SUBTITLE: TextStyle = {
  color: color.palette.black,
  fontWeight: "normal",
  paddingVertical: 15,
}

const CONTENT_ERROR: TextStyle = {
  color: color.error,
  fontWeight: "bold",
  paddingVertical: 15,
}

export interface ErrorComponentProps {
  error: Error
  errorInfo: ErrorInfo
  onReset(): void
}

/**
 * Describe your component here
 */
export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View style={CONTAINER}>
      <Typography variant="header" style={TITLE_ERROR}>
        {translate("errorScreen.title")}
      </Typography>
      <Typography variant="header" style={FRIENDLY_SUBTITLE}>
        {translate("errorScreen.friendlySubtitle")}
      </Typography>
      <View style={ERROR_DETAILS_CONTAINER}>
        <ScrollView>
          <Typography style={CONTENT_ERROR} variant="text">
            {props.error}
          </Typography>
        </ScrollView>
      </View>

      <Button style={BTN_RESET} onPress={props.onReset} tx="errorScreen.reset" />
    </View>
  )
}
