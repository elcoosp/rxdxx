// @ts-check

/**
 * @typedef {object} EntityStateSlice
 * @property  {array} [allIds=Array] All of the entity ids, for ordering
 * @property  {object} [meta=Object] Entity related informations
 * @property  {object} [byId=false] An object for quick id retrieval of entities
 */

/**
 * @param {EntityStateSlice} slice
 * @returns {EntityStateSlice}
 */
export default function entityStateSlice (
  { byId, allIds, meta } = { byId: {}, allIds: [], meta: {} }
) {
  return { byId, allIds, meta }
}
