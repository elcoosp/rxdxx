// @ts-check

/**
 * @typedef {object} AsyncStateSliceObject
 * @property {array} [errors=Array] An array of errors
 * @property {boolean} [isSuccess=false] Success status
 * @property {boolean} [isPending=false] Pending status
 * @property {boolean} [isFailure=false] Failure status
 */

/**
 * @param {AsyncStateSliceObject} slice
 * @returns {AsyncStateSliceObject}
 */
export default function asyncStateSlice (
  { errors, isSuccess, isPending, isFailure } = {
    errors: [],
    isSuccess: false,
    isPending: false,
    isFailure: false
  }
) {
  return {
    errors,
    isSuccess,
    isFailure,
    isPending
  }
}
