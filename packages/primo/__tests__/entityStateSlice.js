import { entityStateSlice } from '../src'

describe('stateSlice()', () => {
  it('should return an object with byId ({}), allIds ([]), and meta ({}) fields', () => {
    expect(entityStateSlice()).toEqual({ byId: {}, allIds: [], meta: {} })
  })
  it('should return the given byId, allIds and meta fields', () => {
    const byId = { 0: { id: 0 } }
    const allIds = [0]
    const meta = { error: true }
    const draft = {
      byId,
      allIds,
      meta,
      someFieldNotReturned: ''
    }
    expect(entityStateSlice(draft)).toEqual({
      byId,
      allIds,
      meta
    })
  })
})
