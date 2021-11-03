import React from "react"

import { Typography } from "@mui/material"

function AdminRoute({ authUser, children }) {
  return !authUser?.is_admin ? (
    <>
      <Typography variant="h5" color="secondary">
        Unauthorized:
      </Typography>
      <Typography variant="h6" color="error">
        You don't have admin previlege to view this
      </Typography>
    </>
  ) : (
    <>{children}</>
  )
}

export default AdminRoute
