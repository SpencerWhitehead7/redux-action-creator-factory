# Action Creator Factory

Action Creator Factory is a single function that allows you to generate Redux-style action creators quickly and easily, without typing out the entire action object.

Redux actions are plain Javascript objects that look like this:

```
{
  type: "a string literal, or a variable set to a string literal",
  payload: [any, type, of, data]
}
```

Developers typically define them like this:

```
const SAMPLE_TYPE = "SAMPLE_TYPE"

const sampleActionCreator = payload => ({type: SAMPLE_TYPE, payload})

// and dispatch them to trigger actions in the Redux store

store.dispatch(sampleActionCreator(samplePayload))
```

(React-Redux offers some wrappers for this behavior)

The ACF simplifies this into one step. It takes an action type and optionally a payload and returns an action creator:

```
import ACF from 'redux-action-creator-factory'

const SAMPLE_TYPE = "SAMPLE_TYPE"

store.dispatch(ACF(SAMPLE_TYPE))

// or, with a payload

store.dispatch(ACF(SAMPLE_TYPE, "a payload"))
```

## Installation

run `npm install redux-action-creator-factory` in the command line from your project's directory.

## Providing input to ACF

If you do not provide any arguments (not recommended), it returns {type: undefined}

`ACF() = {type: undefined}`

Redux suggests using strings for action types, but does not require it. This library therefore also suggests but does not require that you use strings for action types.

If you provide a single argument, ACF sets it to the action type.

`ACF("SAMPLE_TYPE") = {type: "SAMPLE_TYPE"}`

If you provide two arguments, ACF sets the first to the action type and the second to the payload.

`ACF("SAMPLE_TYPE", "SAMPLE PAYLOAD) = {type: "SAMPLE_TYPE, payload: "SAMPLE PAYLOAD"}`

ACF can take any kind of input for the payload, including falsey values.

`ACF("SAMPLE_TYPE", false) = ({type: "SAMPLE_TYPE", false})`

If you provide more than two arguments, ACF sets the first to the action type and second to the payload, as usual, and ignores all the other arguments.

`ACF("SAMPLE_TYPE", "SAMPLE PAYLOAD", "extra argument") = {type: "SAMPLE_TYPE, payload: "SAMPLE PAYLOAD"}`

If you want an action creator with a payload of undefined, you must pass it explictly

`ACF("SAMPLE_TYPE", undefined) = {type: "SAMPLE_TYPE, payload: undefined}`

### Contact Us

If you find a bug or have suggestions for improving this library, please feel free to contact us at:

kerrd268@gmail.com

spencerwhitehead7@gmail.com