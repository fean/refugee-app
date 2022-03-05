import * as React from "react"
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
} from "react-native"
import { color } from "../../../theme"
import { Typography } from "../typography/Typography"

interface TextAreaProps {
  maxCharacters?: number
  style?: StyleProp<TextStyle>
  autoComplete?: TextInputProps["autoComplete"]
  textContentType?: TextInputProps["textContentType"]
  keyboardType?: TextInputProps["keyboardType"]
  returnKeyType?: TextInputProps["returnKeyType"]
  nextRef?: React.RefObject<TextInput>
  numberOfLines?: number
  placeholder?: string
  value?: string
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void
  onChange?: (value: string) => void
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  counter: {
    flex: 1,
    marginTop: 4,
    textAlign: "right",
  },
  input: {
    backgroundColor: color.palette.control,
    borderRadius: 5,
    minHeight: 128,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
  },
})

export const TextArea = React.forwardRef<TextInput, TextAreaProps>(
  ({ style, nextRef, maxCharacters, value, onChange, ...restProps }, ref) => {
    const handleSubmitEditing = React.useCallback(() => {
      if (!nextRef) return
      const { current } = nextRef

      current?.focus()
    }, [nextRef])

    const valueLength = value?.length ?? 0

    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          multiline
          value={value}
          style={[styles.input, style]}
          onSubmitEditing={handleSubmitEditing}
          onChangeText={onChange}
          underlineColorAndroid="transparent"
          {...restProps}
        />

        {maxCharacters && (
          <Typography
            variant="chip"
            color={valueLength < maxCharacters ? "placeholder" : "warn"}
            style={styles.counter}
          >
            {`${valueLength}/${maxCharacters}`}
          </Typography>
        )}
      </View>
    )
  },
)
