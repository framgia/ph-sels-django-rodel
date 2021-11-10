import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import _reducers from "./store/reducers"

export const store = createStore(
  _reducers,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
