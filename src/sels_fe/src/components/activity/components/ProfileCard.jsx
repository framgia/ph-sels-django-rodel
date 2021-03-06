import React, { Fragment } from "react"
import { useHistory } from "react-router-dom"

import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { profileCardStyle, profileMedia } from "./style"
import { getAuthUserActivtyPrimaryText } from "./helper"

const ProfileCard = ({ authUserActivities, authUser }) => {
  const history = useHistory()

  return (
    <Card elevation={0} sx={profileCardStyle}>
      <Stack direction="row" spacing={0} sx={{ justifyContent: "left" }}>
        <CardContent>
          <Stack direction="column" spacing={0} sx={{ justifyContent: "left" }}>
            <CardMedia
              component="img"
              image={
                "https://images.unsplash.com/photo-1596700227860-03590ad3a755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              }
              alt="user photo"
              sx={profileMedia}
            />
            <Typography variant="h5">{authUser?.username}</Typography>
          </Stack>
        </CardContent>
        <CardContent>
          <Typography variant="h6" color="green">
            Recent Activity
          </Typography>
          <List sx={{ minWidth: 240, justifyContent: "left" }}>
            <Stack
              direction="column"
              spacing={0}
              sx={{ justifyContent: "left" }}
            >
              {authUserActivities?.map((activity) => (
                <Fragment key={activity.id}>
                  <Stack direction="column" spacing="2rem">
                    <ListItem
                      button
                      dense
                      onClick={() =>
                        history.push(
                          (activity.activity_type === "Follow") |
                            (activity.activity_type === "Unfollow")
                            ? `/user/${activity.followed.id}`
                            : activity.activity_type === "Lesson" &&
                                `/activities/${activity.id}`
                        )
                      }
                    >
                      <ListItemText
                        primary={getAuthUserActivtyPrimaryText(activity)}
                      />
                    </ListItem>
                  </Stack>
                </Fragment>
              ))}
            </Stack>
          </List>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default ProfileCard
