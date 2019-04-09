export function actionCreator(type = '') {
	return (payload = {}, meta = {}) => ({
		type,
		payload,
		meta
	})
}

export function stateSlice({ byId = {}, allIds = [], meta = {} } = {}) {
	return { byId, allIds, meta }
}
