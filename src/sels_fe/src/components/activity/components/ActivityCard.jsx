import React, { Fragment, useEffect, useState } from "react"

import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { cardStyle, cardContentStyle, listStyle } from "./style"
import { getActivtyPrimaryText } from "./helper"
import AnchorIcon from "@mui/icons-material/Anchor"

dayjs.extend(relativeTime)

const ActivityCard = ({ userFollowedUserActivities, authUser }) => {
  const [authUsername, setAuthUsername] = useState(null)

  useEffect(() => {
    setAuthUsername(authUser?.username)
  }, [authUser])

  return (
    <Stack direction="row" spacing="2rem" sx={{ justifyContent: "right" }}>
      <Card elevation={5} sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <List sx={listStyle} subheader={<li />}>
            {userFollowedUserActivities?.map((activity) => (
              <Fragment key={activity.id}>
                <Stack direction="row" spacing={2}>
                  <ListItemIcon>
                    <CardMedia
                      component="img"
                      image={
                        authUser?.id === activity.user.id
                          ? "static/images/authProfile.jpg"
                          : "static/images/profile.png"
                      }
                      alt="profile icon"
                      sx={{
                        ml: "1rem",
                        width: 40,
                        height: 40,
                        alignSelf: "center",
                        borderRadius: "50%",
                      }}
                    />
                  </ListItemIcon>
                  <ListItem button>
                    <ListItemText
                      primary={getActivtyPrimaryText(activity, authUsername)}
                      secondary={
                        <Typography variant="subtitle1" sx={{ ml: "0.5rem" }}>
                          {dayjs(activity.created_at).fromNow()}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Stack>
              </Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default ActivityCard
