import React, { Fragment } from "react"

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
  return (
    <Card elevation={0} sx={profileCardStyle}>
      <Stack direction="row" spacing={0} sx={{ justifyContent: "left" }}>
        <CardContent>
          <Stack direction="column" spacing={0} sx={{ justifyContent: "left" }}>
            <CardMedia
              component="img"
              image={"static/images/authProfile.jpg"}
              alt="quiz icon"
              sx={profileMedia}
            />
            <Typography variant="h6">{authUser?.username}</Typography>
          </Stack>
        </CardContent>
        <CardContent>
          <List sx={{ minWidth: 240, justifyContent: "left" }}>
            <Stack
              direction="column"
              spacing={0}
              sx={{ justifyContent: "left" }}
            >
              {authUserActivities?.map((activity) => (
                <Fragment key={activity.id}>
                  <Stack direction="column" spacing="2rem">
                    <ListItem button dense>
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
