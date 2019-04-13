import { actionType } from '../src'

describe('actionType', () => {
  const action = 'action'
  const namespace = 'namespace'
  const status = 'status'
  it('should return an action type given only an actionName', () => {
    expect(actionType({ actionName: action })).toEqual(action)
  })
  it('should return an action type given only an actionName and status', () => {
    expect(actionType({ actionName: action, namespace })).toEqual(
      `${namespace} → ${action}`
    )
  })
  it('should return an action type given all arguments', () => {
    expect(actionType({ actionName: action, namespace, status })).toEqual(
      `${namespace} → ${action} ⌁ ${status}`
    )
  })
})
