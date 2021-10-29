import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import Profile from "./Proflie"

const UserProfile = ({ authUser }) => {
  const { id } = useParams()
  const activityList = useSelector((state) => state.Activity.activity_list)
  const userList = useSelector((state) => state.User.user_list)
  const [currentActivities, setCurrentActivities] = useState({})
  const [currentuser, setCurrenUser] = useState({})

  useEffect(() => {
    setCurrentActivities(
      activityList?.filter((activity) => activity.user.id === parseInt(id))
    )
  }, [activityList, id])

  useEffect(() => {
    setCurrenUser(userList?.find((user) => user.id === parseInt(id)))
  }, [userList, id])

  return (
    <Box sx={{ justifyContent: "center" }}>
      <Profile
        user={currentuser}
        authUser={authUser}
        currentActivities={currentActivities}
      />
    </Box>
  )
}

export default UserProfile
