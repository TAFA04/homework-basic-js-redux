const redux = require("redux")

// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe what happened, but don't describe how the application's state changes.
// A reducer is a pure function that takes the previous state and an action, and returns the next state.
//
// (previousState, action) => newState

// Implement the function `talkingReducer` to make the below code print the expected output.

const talkingReducer = (state = "", {type, text}) => {
  switch (type) {
    case "GREETING":
      return "Hello"

    case "QUESTION":
      if (text === "How are you?"){
        return "I'm doing well"
      } else {
        return 28
      }

  default:
  return state

  }
}

const store = redux.createStore(talkingReducer)


store.dispatch({type: "GREETING"})






// Expected output: "Hello"
console.log(store.getState())


store.dispatch({type: "QUESTION", text: "How are you?"})

// Expected output: "I'm doing well"
console.log(store.getState())


store.dispatch({type: "QUESTION", text: "How old are you?"})

// Expected output: 28
console.log(store.getState())
