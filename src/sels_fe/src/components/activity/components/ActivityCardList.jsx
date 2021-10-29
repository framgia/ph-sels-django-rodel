import React, { Fragment, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import {
  Stack,
  Card,
  CardContent,
  CardMedia,
  ListItemSecondaryAction,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
} from "@mui/material"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { cardStyle, cardContentStyle, listStyle } from "./style"
import { getActivtyPrimaryText } from "./helper"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"

dayjs.extend(relativeTime)

const ActivityCardList = ({ userFollowedUserActivities, authUser }) => {
  const [authUsername, setAuthUsername] = useState(null)
  const history = useHistory()

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
                <ListItem
                  button
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
                  <ListItemIcon>
                    <CardMedia
                      component="img"
                      image={
                        authUser?.id === activity.user.id
                          ? "https://images.unsplash.com/photo-1596700227860-03590ad3a755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                          : "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      }
                      alt="profile icon"
                      sx={{
                        m: "0.5rem 1rem",
                        width: 60,
                        height: 60,
                        alignSelf: "center",
                        borderRadius: "50%",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={getActivtyPrimaryText(activity, authUsername)}
                    secondary={
                      <Typography variant="subtitle1" sx={{ ml: "0.5rem" }}>
                        {dayjs(activity.created_at).fromNow()}
                      </Typography>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <ArrowRightAltIcon color="primary" fontSize="medium" />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default ActivityCardList
