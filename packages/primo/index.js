export function actionCreator (type = '') {
  return (payload = {}, meta = {}) => ({
    type,
    payload,
    meta
  })
}

export function asyncStateSlice ({
  errors = [],
  isSuccess = false,
  isPending = false,
  isFailure = false
} = {}) {
  return {
    errors,
    isSuccess,
    isFailure,
    isPending
  }
}
export function entityStateSlice ({ byId = {}, allIds = [], meta = {} } = {}) {
  return { byId, allIds, meta }
}

/* API */
const primo = {
  stateSlice: {
    async: asyncStateSlice,
    entity: entityStateSlice
  }
}

export default primo
