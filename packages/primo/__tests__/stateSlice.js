import { stateSlice } from '..'

describe('stateSlice', () => {
	it('should return an object with byId ({}), allIds ([]), and meta ({}) fields', () => {
		expect(stateSlice()).toEqual({ byId: {}, allIds: [], meta: {} })
	})
	it('should return the given byId, allIds and meta fields', () => {
		const byId = { 0: { id: 0 } },
			allIds = [0],
			meta = { error: true },
			draft = {
				byId,
				allIds,
				meta,
				someFieldNotReturned: ''
			}
		expect(stateSlice(draft)).toEqual({
			byId,
			allIds,
			meta
		})
	})
})
