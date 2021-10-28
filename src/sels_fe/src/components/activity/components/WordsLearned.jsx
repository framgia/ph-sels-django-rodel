import React, { Fragment, useEffect, useState } from "react"

import {
  Box,
  Stack,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { cardStyle, cardContentStyle, listStyle } from "./style"
import { getActivtyPrimaryText } from "./helper"

dayjs.extend(relativeTime)

const ActivityCard = ({ activities, authUser }) => {
  const [authUsername, setAuthUsername] = useState(null)

  useEffect(() => {
    setAuthUsername(authUser?.username)
  }, [authUser])

  return (
    <Stack direction="row" spacing="2rem" sx={{ justifyContent: "right" }}>
      <Card elevation={5} sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <List sx={listStyle} subheader={<li />}>
            {activities?.map((activity) => (
              <Fragment key={activity.id}>
                <Stack direction="column" spacing="2rem">
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
