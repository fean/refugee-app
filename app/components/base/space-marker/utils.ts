export const createMarkerUri = (active?: boolean, nrBeds?: number): string => {
  if (active) {
    return nrBeds < 10 ? `marker-active-${nrBeds}` : "marker-active-9+"
  }
  return nrBeds < 10 ? `marker-${nrBeds}` : "marker-9+"
}
