import { Alert } from "react-native"

import { ErrorCode } from "../../services/api/ErrorCode"
import { translate } from "../../i18n"

export const handleError = (message: string): void => {
  switch (message) {
    case ErrorCode.AddressNotFound: {
      Alert.alert(
        translate("screens.pa-setup.bad-address-title"),
        translate("screens.pa-setup.bad-address-message"),
        [
          {
            text: translate("common.back"),
          },
        ],
      )
      break
    }
    case ErrorCode.EmailAlreadyExists: {
      Alert.alert(
        translate("screens.pa-setup.email-title"),
        translate("screens.pa-setup.email-message"),
        [
          {
            text: translate("common.back"),
          },
        ],
      )
      break
    }
    default: {
      Alert.alert(
        translate("screens.pa-setup.generic-title"),
        translate("screens.pa-setup.generic-message"),
        [
          {
            text: translate("common.back"),
          },
        ],
      )
    }
  }
}
