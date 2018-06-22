const ActionCreatorFactory = (type, ...payload) => {
  const actionCreator = {
    type,
  }
  if(payload.length > 0) actionCreator.payload = payload[0]
  return actionCreator
}

module.exports = ActionCreatorFactory