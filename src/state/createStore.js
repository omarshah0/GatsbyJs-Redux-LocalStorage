import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    localStorage.setItem(
      "root",
      JSON.stringify({ ...state, count: state.count + 1, name: "Omar Farooq" })
    )
    return Object.assign({}, state, {
      ...state,
      count: state.count + 1,
      name: "Omar Farooq",
      id: "omarfarooq",
    })
  }
  if (action.type === `DECREMENT`) {
    localStorage.setItem(
      "root",
      JSON.stringify({ ...state, count: state.count - 1, name: "Shafi Shah" })
    )
    return Object.assign({}, state, {
      ...state,
      count: state.count - 1,
      name: "Shafi Shah",
      id: "shafishah",
    })
  }
  return state
}

let initialState

if (localStorage.getItem("root")) {
  const root = JSON.parse(localStorage.getItem("root"))
  console.log(root)
  initialState = {
    count: root.count,
    name: root.name,
    id: root.id,
  }
} else {
  initialState = { count: 0, name: "Defauly", id: "Default" }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
