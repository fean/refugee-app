import * as React from "react"
import { StyleProp, ViewStyle, StyleSheet, FlatList } from "react-native"

import { supportedCountries, CountryDetails } from "../../cards/country-card/CountryCard.countries"
import { Modal } from "../../base/modal/Modal"
import { translate } from "../../../i18n"
import { CountryCard } from "../../cards/country-card/CountryCard"

interface PanelProps {
  style?: StyleProp<ViewStyle>
  open?: boolean
  onClose: (selection: CountryDetails | null) => void
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  lastCard: {
    marginBottom: 16,
  },
  list: {
    height: "100%",
    paddingTop: 16,
    width: "100%",
  },
  modal: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  modalTitle: {
    marginBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
})

export const CountryModal: React.FC<PanelProps> = ({ open, style: styleOverride, onClose }) => {
  const handleClose = React.useCallback(() => onClose(null), [onClose])

  return (
    <Modal
      style={styles.modal}
      headerStyle={styles.modalTitle}
      open={open}
      title={translate("modals.country.title")}
      onClose={handleClose}
    >
      <FlatList
        style={styles.list}
        data={supportedCountries}
        renderItem={({ index, item: countryCode }) => (
          <CountryCard
            style={[styles.card, supportedCountries.length - 1 === index && styles.lastCard]}
            country={countryCode}
            onPress={onClose}
          />
        )}
      />
    </Modal>
  )
}
