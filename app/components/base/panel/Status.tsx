import * as React from "react"
import { StyleProp, ViewStyle, TextStyle } from "react-native"

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

const PANEL: ViewStyle = {
  padding: 16,
  paddingTop: 40,
}

const STATUS: ViewStyle = {
  position: "absolute",
  top: 0,
  left: 16,
}

const STATUSTEXT: TextStyle = {
  position: "absolute",
  top: 16,
  left: 16,
}

const AGOTEXT: TextStyle = {
  position: "absolute",
  top: 16,
  right: 16,
}

const STATUSCOLORS = {
  approved: "accepted",
  pending: "warn",
}

export const StatusPanel: React.FC<StatusPanelProps> = ({ panelStyle, status, date, children }) => {
  const timeAgo = React.useMemo(
    () => (date ? formatDistance(date, new Date(), { addSuffix: true }) : null),
    [date],
  )

  return (
    <Panel style={[PANEL, panelStyle]}>
      <StatusBar status={status} style={STATUS} />
      <Typography style={STATUSTEXT} variant="chip" color={STATUSCOLORS[status] as any}>
        {translate(`approvalState.${status}`)}
      </Typography>

      {date && (
        <Typography style={AGOTEXT} variant="chip" color="placeholder">
          {timeAgo}
        </Typography>
      )}

      {children}
    </Panel>
  )
}
