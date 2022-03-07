export const createMarkerUri = (active?: boolean, nrBeds?: number): string => {
  if (active) {
    return nrBeds < 10 ? `markeractive${nrBeds}` : "markeractive9p"
  }
  return nrBeds < 10 ? `marker${nrBeds}` : "marker9p"
}
