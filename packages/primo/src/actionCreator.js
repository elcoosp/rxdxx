// @ts-check

/**
 * @param {string} [type=''] The type of the returned actionc creator
 * @returns {function} An action creator of the provided type
 */
export default function actionCreator (type = '') {
  return (payload = {}, meta = {}) => ({
    type,
    payload,
    meta
  })
}
