import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useRouteMatch } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { getUserList } from "../../store/actions"

import { Typography } from "@mui/material"

function AdminMain() {
  const isAuthenticated = useSelector((state) => state.Signin.isAuthenticated)
  const authUser = useSelector((state) => state.AuthUser.data)
  let { path } = useRouteMatch()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserList())
  }, [dispatch])

  return isAuthenticated ? (
    authUser?.is_admin ? (
      <>
        <Typography variant="h6" color="primary">
          From Admin with love
        </Typography>
        <Switch>
          <Route path={`${path}`} exact>
            {/* <UserList users={user_list} /> */}
          </Route>
          {/* <Route path={`${path}/create`} component={UserCreate} /> */}
          {/* <Route path={`${path}/new`} component={UserWithQuestionsCreate} />
      <Route path={`${path}/:id/edit`} component={UserUpdate} />
      <Route path={`${path}/:id/delete`} component={UserDelete} />
      <Route path={`${path}/:id`} component={UserDetail} /> */}
        </Switch>
      </>
    ) : (
      <Typography variant="h6" color="primary">
        You don't have permission to view this page.
      </Typography>
    )
  ) : (
    <Typography variant="h6" color="primary">
      Signin to view this page.
    </Typography>
  )
}

export default AdminMain
