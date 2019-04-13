import { asyncStateSlice } from '../src'

describe('asyncStateSlice()', () => {
  it('should return an object with errors ( : []), isPending, isSuccess, isFailure (= false) fields', () => {
    expect(asyncStateSlice()).toEqual({
      errors: [],
      isSuccess: false,
      isPending: false,
      isFailure: false
    })
  })
})
