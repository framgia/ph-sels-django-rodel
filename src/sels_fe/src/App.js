import "./App.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import { authCheckState, getAuthUserDetails } from "./store/actions"

import { ESLNavBar } from "./components/header"
import PagesRoute from "./pages/PagesRoute"

function App() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authCheckState())
    isAuthenticated && dispatch(getAuthUserDetails())
  }, [dispatch, isAuthenticated])

  return (
    <div className="App">
      <Router>
        <ESLNavBar />
        <PagesRoute authUser={authUser} auth={isAuthenticated} />
      </Router>
    </div>
  )
}

export default App
