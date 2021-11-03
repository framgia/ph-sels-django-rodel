import { Redirect } from "react-router"
import React from "react"

import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

function AuthenticatedRoute({ auth, children }) {
  const location = useLocation()

  return auth ? (
    <>{children}</>
  ) : (
    <>
      <Redirect
        to={{
          pathname: "/signin",
          state: { from: location.pathname },
        }}
      />
      <Typography variant="subtitle2" color="secondary">
        You are not signed in.
      </Typography>
    </>
  )
}

export default AuthenticatedRoute
