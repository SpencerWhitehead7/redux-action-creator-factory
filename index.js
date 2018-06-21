const ActionCreatorFactory = (actiontypes, payloads) => {
  if(actiontypes.length !== payloads.length){
    throw new Error(`Actiontype and payload arrays must be the same length. Enter null as a placeholder if an action creator does not need a payload`)
  }
  const ActionCreators = {}
  actiontypes.forEach((actiontype, i) => {
    ActionCreators[actiontype] = { type : actiontype, payload : payloads[i] }
  })
  return ActionCreators
}

export default ActionCreatorFactory