import React, { Fragment, useEffect, useState } from "react"

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
import {
  profileCardStyle,
  profileCardContentStyle,
  profileStyle,
  profileMedia,
} from "./style"
import { getAuthUserActivtyPrimaryText } from "./helper"

const ProfileCard = ({ authUserActivities, authUser }) => {
  return (
    <Stack direction="row" spacing={6} sx={{ justifyContent: "left" }}>
      <Card elevation={0} sx={profileCardStyle}>
        <CardContent sx={profileCardContentStyle}>
          <Stack direction="row" spacing={0} sx={{ justifyContent: "left" }}>
            <CardMedia
              component="img"
              image="static/images/profile.png"
              alt="quiz icon"
              sx={profileMedia}
            />
            <Stack
              direction="column"
              spacing={0}
              sx={{ justifyContent: "center" }}
            >
              <Typography variant="h6" sx={{}}>
                {authUser?.username}
              </Typography>
              <List sx={{ justifyContent: "left" }}>
                {authUserActivities?.map((activity) => (
                  <Fragment key={activity.id}>
                    <Stack direction="column" spacing="2rem">
                      <ListItem button>
                        <ListItemText
                          primary={getAuthUserActivtyPrimaryText(activity)}
                        />
                      </ListItem>
                    </Stack>
                  </Fragment>
                ))}
              </List>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default ProfileCard
