import React, { Fragment } from "react"
import { useHistory } from "react-router-dom"

import {
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardMedia,
} from "@mui/material"
import { getUserActivtyPrimaryText } from "./helper"
import { listStyle } from "./style"

const UserActivities = ({ user, currentActivities }) => {
  const history = useHistory()

  return (
    <List sx={listStyle}>
      <Stack direction="column" spacing={0} sx={{ justifyContent: "left" }}>
        {currentActivities.length > 0
          ? currentActivities?.map((activity) => (
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
                    <ListItemIcon>
                      <CardMedia
                        component="img"
                        image={
                          user?.id === activity.user.id
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
                      primary={getUserActivtyPrimaryText(
                        activity,
                        user?.username
                      )}
                    />
                  </ListItem>
                </Stack>
              </Fragment>
            ))
          : null}
      </Stack>
    </List>
  )
}

export default UserActivities
