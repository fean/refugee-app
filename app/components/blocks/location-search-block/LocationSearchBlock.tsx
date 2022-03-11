import * as React from "react"
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { observer } from "mobx-react-lite"

import { borderRadius, color } from "../../../theme"
import { shadows } from "../../../theme/shadows"
import { useDebounce } from "../../../utils/hooks"

import { IconButton } from "../../base/button"
import { Input } from "../../base/input/Input"
import { useStores } from "../../../models"
import { translate } from "../../../i18n"
import { Typography } from "../../base/typography/Typography"
import { Location } from "../../../models/location/location"

interface LocationSearchBlockProps {
  style?: StyleProp<ViewStyle>
  onSelect: (selection: Location | null) => void
}

const styles = StyleSheet.create({
  blurPortal: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  fieldContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  fieldContainerActive: {
    borderBottomColor: color.palette.control,
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingBottom: 8,
  },
  input: {
    backgroundColor: color.palette.white,
    paddingLeft: 8,
  },
  inputContainer: {
    flex: 1,
  },
  location: {
    marginRight: 16,
  },
  panel: {
    alignItems: "flex-start",
    backgroundColor: color.palette.white,
    borderRadius: borderRadius.big,
    flexDirection: "column",
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    ...shadows.block,
  },
  placeName: {
    flex: 1,
  },
  textBtn: {
    flexDirection: "row",
    height: 24,
  },
})

const LocationSearchBlockComp: React.FC<LocationSearchBlockProps> = ({
  style: styleOverride,
  onSelect,
}) => {
  const inputRef = React.useRef<TextInput>()
  const [isLoading, setLoading] = React.useState(false)
  const [isCollapsed, setCollapsed] = React.useState(true)
  const [tmpLocation, setTmpLocation] = React.useState<string>()
  const locationQuery = useDebounce(tmpLocation, 1000)
  const { locationStore } = useStores()

  const handleClear = React.useCallback(() => {
    setTmpLocation(null)
    locationStore.saveLocations([])
  }, [locationStore.saveLocations])

  const handleSelect = React.useCallback((selection: Location) => {
    onSelect(selection)
    setCollapsed(true)
    inputRef.current?.blur()
  }, [])

  const handleBlur = React.useCallback(() => {
    setCollapsed(true)
  }, [])

  const handleFocusInput = React.useCallback(() => {
    if (locationStore.locations?.length) {
      setCollapsed(false)
    }
  }, [locationStore.locations])

  React.useEffect(() => {
    if (!locationQuery) return
    setLoading(true)

    locationStore
      .queryLocations(locationQuery)
      .then(() => {
        setLoading(false)
        setCollapsed(false)
      })
      .catch(console.warn)
  }, [locationQuery])

  const isLocationsShown = !!locationStore.locations.length && !isLoading && !isCollapsed

  return (
    <TouchableWithoutFeedback onPress={handleBlur}>
      <View style={isLocationsShown && styles.blurPortal}>
        <View style={[styles.panel, styleOverride]}>
          <View style={[styles.fieldContainer, isLocationsShown && styles.fieldContainerActive]}>
            <Icon name="search-outline" size={24} color={color.palette.text} />

            <Input
              ref={inputRef}
              disabled={isLoading}
              style={styles.inputContainer}
              inputStyle={styles.input}
              value={tmpLocation}
              placeholder={translate("blocks.location-search.search-placeholder")}
              onFocus={handleFocusInput}
              onChange={setTmpLocation}
            />

            {!!tmpLocation && !isLoading && (
              <IconButton
                icon={<Icon name="close" size={16} color={color.palette.text} />}
                onPress={handleClear}
              />
            )}
            {isLoading && <ActivityIndicator size="small" color={color.palette.text} />}
          </View>

          {isLocationsShown &&
            locationStore.locations.map((location) => (
              <TouchableOpacity
                key={location.id}
                style={styles.textBtn}
                onPress={() => handleSelect(location)}
              >
                <Icon
                  name="location"
                  size={16}
                  color={color.palette.text}
                  style={styles.location}
                />
                <Typography
                  variant="text"
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={styles.placeName}
                >
                  {location.name}
                </Typography>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export const LocationSearchBlock = observer(LocationSearchBlockComp)
