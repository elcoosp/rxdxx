export default function actionType ({ namespace, actionName, status }) {
  const namespaceOrNone = namespace ? `${namespace} → ` : ``
  const statusOrNone = status ? ` ⌁ ${status}` : ``
  return `${namespaceOrNone}${actionName}${statusOrNone}`
}
