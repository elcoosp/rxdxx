import { actionCreator } from '..'

describe('actionCreator', () => {
  it('should return an action creator, which, when called should return an object with type, payload and meta fields', () => {
    const payload = 'payload'
    const meta = 'meta'
    const type = 'type'
    const action = actionCreator(type)(payload, meta)

    expect(action).toEqual({
      type,
      payload,
      meta
    })
  })

  it('should set payload and meta to objects, and type to an empty string by default', () => {
    const action = actionCreator()()

    expect(action).toEqual({
      type: '',
      payload: {},
      meta: {}
    })
  })
})
