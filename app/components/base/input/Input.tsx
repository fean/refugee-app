import * as React from "react"
import {
  View,
  StyleProp,
  TextInput,
  NativeSyntheticEvent,
  TextStyle,
  StyleSheet,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface InputProps {
  style?: StyleProp<TextStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  disabled?: boolean
  icon?: string
  error?: string
  autoCapitalize?: TextInputProps["autoCapitalize"]
  autoComplete?: TextInputProps["autoComplete"]
  textContentType?: TextInputProps["textContentType"]
  keyboardType?: TextInputProps["keyboardType"]
  returnKeyType?: TextInputProps["returnKeyType"]
  nextRef?: React.RefObject<TextInput>
  placeholder?: string
  value?: string
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onChange?: (value: string) => void
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: color.palette.control,
  },
  error: {
    borderColor: color.palette.error,
  },
  errorContainer: {
    flexDirection: "column",
  },
  errorText: {
    flex: 1,
    marginTop: 2,
  },
  icon: {
    height: 16,
  },
  input: {
    borderRadius: 5,
    flexGrow: 1,
    fontSize: 14,
    minHeight: 32,
    paddingLeft: 8,
  },
  inputIcon: {
    marginLeft: 8,
  },
  root: {
    alignItems: "center",
    borderColor: color.transparent,
    borderWidth: 1,
    color: color.palette.text,
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 8,
  },
})

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      style,
      inputContainerStyle,
      inputStyle,
      disabled,
      icon,
      error,
      autoCapitalize,
      autoComplete,
      textContentType,
      keyboardType,
      returnKeyType,
      nextRef,
      value,
      placeholder,
      onFocus,
      onBlur,
      onChange,
    },
    ref,
  ) => {
    const [isActive, setActive] = React.useState(false)

    const handleFocus = React.useCallback(
      (event) => {
        setActive(true)
        onFocus && onFocus(event)
      },
      [onFocus],
    )

    const handleBlur = React.useCallback(
      (event) => {
        setActive(false)
        onBlur && onBlur(event)
      },
      [onBlur],
    )

    const handleSubmitEditing = React.useCallback(() => {
      if (!nextRef) return
      const { current } = nextRef

      current.focus()
    }, [nextRef])

    return (
      <View style={[styles.errorContainer, style]}>
        <View style={[icon && styles.root, inputContainerStyle, !!error && styles.error]}>
          {icon && (
            <Icon style={styles.icon} name={icon} size={16} color={color.palette.textShade} />
          )}
          <TextInput
            ref={ref}
            blurOnSubmit
            autoCapitalize={autoCapitalize}
            editable={!disabled}
            autoComplete={autoComplete}
            textContentType={textContentType}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            style={[styles.input, isActive && styles.active, icon && styles.inputIcon, inputStyle]}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={color.palette.placeholder}
            onSubmitEditing={handleSubmitEditing}
            onChangeText={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>

        {error && (
          <Typography style={styles.errorText} variant="note" color="error">
            {error}
          </Typography>
        )}
      </View>
    )
  },
)
