/* eslint-disable @typescript-eslint/prefer-as-const */
import * as React from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Icon from "react-native-vector-icons/Ionicons"

import { Button, ContactHeader, TextExplainer } from "../../components"
import { HomeownerNavigatorParamList } from "../../navigators"

import { requests } from "../ho-request-overview/ContactRequestOverviewScreen"
import { shadows } from "../../theme/shadows"
import { color } from "../../theme"
import { translate } from "../../i18n"
import { formatDate } from "../../utils/date"

const styles = StyleSheet.create({
  approvalBtn: {
    height: 40,
    marginTop: 16,
  },
  btnIcon: {
    marginRight: 8,
  },
  container: {
    flexDirection: "column",
    padding: 16,
    paddingTop: 32,
    flex: 1,
  },
  explainer: {
    marginBottom: 24,
  },
  panel: {
    backgroundColor: color.palette.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    bottom: 0,
    left: 0,
    padding: 16,
    paddingTop: 32,
    position: "absolute",
    right: 0,
    top: 128,
    ...shadows.cover,
  },
})

export const ContactRequestDetailsScreen: React.FC<
  StackScreenProps<HomeownerNavigatorParamList, "details">
> = ({
  route: {
    params: { id: detailsId },
  },
}) => {
  const request = React.useMemo(() => requests.find((item) => item.id === detailsId), [detailsId])

  const approvalDate = React.useMemo(
    () => (request?.date ? formatDate(request?.date, "PPPPpp") : "No date"),
    [request?.date],
  )

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ContactHeader
        name={request?.name}
        phone={request?.phone}
        email={request?.email}
        website={request?.website}
      />

      <View style={styles.panel}>
        <TextExplainer
          icon="rocket"
          style={styles.explainer}
          title={translate("screens.ho-contact-details.missionHeader")}
          text={request?.mission}
        />

        <TextExplainer
          icon="business"
          style={styles.explainer}
          title={translate("screens.ho-contact-details.addressHeader")}
          text={[
            request?.address,
            `${request?.postal} ${request?.city}`,
            translate(`countries.${request?.country}`),
          ]}
        />

        <TextExplainer
          icon="earth"
          style={styles.explainer}
          title={translate("screens.ho-contact-details.websiteHeader")}
          text={request?.website}
        />

        {request?.state === "approved" ? (
          <TextExplainer
            icon="checkmark"
            title={translate("screens.ho-contact-details.approvalHeader")}
            text={approvalDate}
          />
        ) : (
          <Button
            style={styles.approvalBtn}
            tx="screens.ho-contact-details.approvalButton"
            icon={
              <Icon style={styles.btnIcon} name="checkmark" size={24} color={color.palette.white} />
            }
          />
        )}
      </View>
    </View>
  )
}
