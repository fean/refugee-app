import * as React from "react"
import { View, StyleProp, ViewStyle, StyleSheet, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

import { color } from "../../../theme"
import { translate } from "../../../i18n"

import { Typography } from "../../base/typography/Typography"
import { Panel } from "../../base/panel"
import { FormikTextArea } from "../../base/text-area/formik"

interface HomeownerDetailsProps {
  style?: StyleProp<ViewStyle>
  blockName?: string
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 16,
  },
  panel: {
    flexDirection: "column",
    padding: 16,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
})

export const PartnerMotivation: React.FC<HomeownerDetailsProps> = ({
  style: styleOverride,
  blockName,
}) => {
  const motivationRef = React.createRef<TextInput>()

  return (
    <Panel style={[styles.panel, styleOverride]}>
      <View style={styles.titleContainer}>
        <Icon name="rocket" size={16} color={color.palette.textShade} style={styles.icon} />
        <Typography variant="text">{translate("blocks.pa-motivation.mission")}</Typography>
      </View>
      <FormikTextArea
        name={`${blockName}.mission`}
        nextRef={motivationRef}
        maxCharacters={90}
        placeholder={translate("blocks.pa-motivation.missionPlaceholder")}
      />
      <View style={styles.titleContainer}>
        <Icon
          name="chatbubble-ellipses"
          size={16}
          color={color.palette.textShade}
          style={styles.icon}
        />
        <Typography variant="text">{translate("blocks.pa-motivation.motivation")}</Typography>
      </View>
      <FormikTextArea
        name={`${blockName}.motivation`}
        nextRef={motivationRef}
        placeholder={translate("blocks.pa-motivation.motivationPlaceholder")}
      />
    </Panel>
  )
}
