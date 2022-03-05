import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet } from "react-native"

import { formatDistance } from "../../../utils/date"
import { translate } from "../../../i18n"
import { Typography } from "../typography/Typography"

import { Panel } from "./Basic"
import { StatusBar } from "./StatusBar"

interface StatusPanelProps {
  panelStyle?: StyleProp<ViewStyle>
  date?: Date
  status: "approved" | "pending"
}

const STATUSCOLORS = {
  approved: "accepted",
  pending: "warn",
}

const styles = StyleSheet.create({
  agoText: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  bar: {
    padding: 16,
    paddingTop: 40,
  },
  status: {
    left: 16,
    position: "absolute",
    top: 0,
  },
  statusText: {
    left: 16,
    position: "absolute",
    top: 16,
  },
})

export const StatusPanel: React.FC<StatusPanelProps> = ({ panelStyle, status, date, children }) => {
  const timeAgo = React.useMemo(
    () => (date ? formatDistance(date, new Date(), { addSuffix: true }) : null),
    [date],
  )

  return (
    <Panel style={[styles.bar, panelStyle]}>
      <StatusBar status={status} style={styles.status} />
      <Typography style={styles.statusText} variant="chip" color={STATUSCOLORS[status] as any}>
        {translate(`approvalState.${status}`)}
      </Typography>

      {date && (
        <Typography style={styles.agoText} variant="chip" color="placeholder">
          {timeAgo}
        </Typography>
      )}

      {children}
    </Panel>
  )
}
