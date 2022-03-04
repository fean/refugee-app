import * as React from "react"
import { TextStyle, StyleProp } from "react-native"
import { useField } from "formik"

import { Value, ValueSelector } from "./ValueSelector"

interface FormikInputFieldProps {
  style?: StyleProp<TextStyle>
  values: Value[]
  name: string
}

export const FormikValueSelector: React.FC<FormikInputFieldProps> = ({ style, values, name }) => {
  const [{ value }, , helpers] = useField(name)

  React.useEffect(() => {
    if (!value) {
      helpers.setValue(values[0].value)
    }
  }, [])

  return (
    <ValueSelector style={style} values={values} currentValue={value} onChange={helpers.setValue} />
  )
}
