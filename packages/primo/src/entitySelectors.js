// @ts-check

export function byId (entityStateSliceGetter) {
  return (state, id) => entityStateSliceGetter(state).byId[id]
}

export function all (entityStateSliceGetter) {
  return state => {
    const slice = entityStateSliceGetter(state)
    return slice.allIds.map(id => slice.byId[id])
  }
}

function entitySelectors (entityStateSliceGetter) {
  return {
    all: all(entityStateSliceGetter),
    byId: byId(entityStateSliceGetter)
  }
}

export default entitySelectors
