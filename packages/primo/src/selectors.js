export function byId (entitySlice) {
  return id => entitySlice.byId[id]
}

export function all (entitySlice) {
  return () => entitySlice.allIds.map(id => entitySlice.byId[id])
}
