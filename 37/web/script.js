// step 3
const initialState = {
  counter: 0
}

// step 2
const doCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }
    case "DECREMENT":
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

// step 1
var store = Redux.createStore(doCounter)

// step 4
var el = document.getElementById('counter')
const render = () => {
  el.innerHTML = store.getState().counter.toString()
}
store.subscribe(render)

// step 5
render() // menampilkan nilai initial

// step 6 - implementasi
var incEl = document.getElementById('increment')
var decEl = document.getElementById('decrement')

incEl.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

decEl.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})