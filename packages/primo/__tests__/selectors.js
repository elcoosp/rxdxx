import { selectors, entityStateSlice } from '../src'

describe('selectors', () => {
  const byId = { 0: { id: 0 }, 1: { id: 1 } }
  const allIds = [0, 1]
  const slice = entityStateSlice({
    byId,
    allIds
  })
  const state = { EntityName: slice }
  const entityStateSliceGetter = state => state.EntityName
  const boundSelectors = selectors(entityStateSliceGetter)
  describe('.all()', () => {
    it('should return an array of all the ordered entities', () => {
      expect(boundSelectors.all(state)).toEqual(allIds.map(id => byId[id]))
    })
  })
  describe('.byId()', () => {
    it('should return the object with the corresponding id stored in byId', () => {
      expect(boundSelectors.byId(state, 0)).toEqual(byId[0])
    })
  })
})
