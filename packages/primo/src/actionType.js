// @ts-check

/**
 * @typedef {object} ActionTypeConfig
 * @property {string} [namespace=''] A namespace under which actions are grouped
 * @property {string} actionName An individual action
 * @property {string} [status=''] Status of the action
 */

/**
 * @param {ActionTypeConfig} actionTypeConfig The namespace, actionName and status of the action type
 * @returns {string} An action type string
 */
export default function actionType ({ namespace, actionName, status }) {
  const namespaceOrNone = namespace ? `${namespace} → ` : ``
  const statusOrNone = status ? ` ⌁ ${status}` : ``
  return `${namespaceOrNone}${actionName}${statusOrNone}`
}
