const { expect } = require(`chai`)
const ACF = require(`./index`)

describe(`Action Creator Factory`, () => {
  it(`accepts an action type and returns a Redux-style action creator`, () => {
    const actionCreator = ACF(`test`)
    expect(actionCreator.type).to.equal(`test`)
  })
  it(`can optionally accept a payload`, () => {
    const actionCreator = ACF(`test`, 1)
    expect(actionCreator.type).to.equal(`test`)
    expect(actionCreator.payload).to.equal(1)
    expect(actionCreator).to.deep.equal({ type : `test`, payload : 1 })
  })
  it(`the payload can be any value`, () => {
    const actionCreator = ACF(`test`, undefined)
    expect(actionCreator.type).to.equal(`test`)
    expect(actionCreator.payload).to.equal(undefined)
    expect(actionCreator).to.deep.equal({ type : `test`, payload : undefined })
  })
  it(`if it is invoked with zero arguments, it returns an object with key "type" and value undefined`, () => {
    const actionCreator = ACF()
    expect(actionCreator.type).to.equal(undefined)
    expect(actionCreator).to.deep.equal({ type : undefined })
  })
  it(`if it is invoked with more than two arguments, it ignores all arguments past the second`, () => {
    const actionCreator = ACF(1, 2, 3, 4)
    expect(actionCreator.type).to.equal(1)
    expect(actionCreator.payload).to.equal(2)
    expect(actionCreator).to.deep.equal({ type : 1, payload : 2 })
  })
})