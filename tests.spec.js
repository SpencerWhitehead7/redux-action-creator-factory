const {expect} = require(`chai`)
const ACF = require(`./index`)

describe(`Action Creator Factory`, () => {
  it(`accepts an action type and returns a Redux-style action creator`, () => {
    const actionCreator = ACF(`test`)
    expect(actionCreator.type).to.equal(`test`)
  })
  it(`can optionally accept a payload as a second argument`, () => {
    const actionCreator = ACF(`test`, 1)
    expect(actionCreator.type).to.equal(`test`)
    expect(actionCreator.payload).to.equal(1)
    expect(actionCreator).to.deep.equal({type : `test`, payload : 1})
  })
  describe(`Rules for handling inputs`, () => {
    it(`if it is invoked with zero arguments, it returns an object with key "type" and value undefined`, () => {
      const actionCreator = ACF()
      expect(actionCreator.type).to.equal(undefined)
      expect(actionCreator).to.deep.equal({type : undefined})
    })
    const actionCreator = ACF(1, 2, 3, 4)
    it(`if it is invoked with more than two arguments, the first argument still becomes the type`, () => {
      expect(actionCreator.type).to.equal(1)
    })
    it(`if it is invoked with more than two arguments, the second argument still becomes the payload`, () => {
      expect(actionCreator.payload).to.equal(2)
    })
    it(`if it is invoked with more than two arguments, it ignores all arguments past the second`, () => {
      expect(Object.keys(actionCreator).length).to.equal(2)
      expect(actionCreator).to.deep.equal({type : 1, payload : 2})
    })
  })
  describe(`The payload: it can take any type`, () => {
    it(`the payload can be a boolean`, () => {
      const actionCreator = ACF(`test`, true)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(true)
      expect(actionCreator).to.deep.equal({type : `test`, payload : true})
    })
    it(`the payload can be null`, () => {
      const actionCreator = ACF(`test`, null)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(null)
      expect(actionCreator).to.deep.equal({type : `test`, payload : null})
    })
    it(`the payload can be undefined`, () => {
      const actionCreator = ACF(`test`, undefined)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(undefined)
      expect(actionCreator).to.deep.equal({type : `test`, payload : undefined})
    })
    it(`the payload can be a number`, () => {
      const actionCreator = ACF(`test`, 1)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(1)
      expect(actionCreator).to.deep.equal({type : `test`, payload : 1})
    })
    it(`the payload can be a string`, () => {
      const actionCreator = ACF(`test`, `string`)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(`string`)
      expect(actionCreator).to.deep.equal({type : `test`, payload : `string`})
    })
    it(`the payload can be a symbol`, () => {
      const mySymbol = Symbol()
      const actionCreator = ACF(`test`, mySymbol)
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.equal(mySymbol)
      expect(actionCreator).to.deep.equal({type : `test`, payload : mySymbol})
    })
    it(`the payload can be an array`, () => {
      const actionCreator = ACF(`test`, [1, 2])
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.deep.equal([1, 2])
      expect(actionCreator).to.deep.equal({type : `test`, payload : [1, 2]})
    })
    it(`the payload can be an object`, () => {
      const actionCreator = ACF(`test`, {key : `val`})
      expect(actionCreator.type).to.equal(`test`)
      expect(actionCreator.payload).to.deep.equal({key : `val`})
      expect(actionCreator).to.deep.equal({type : `test`, payload : {key : `val`}})
    })
  })
})