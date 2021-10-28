import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { followUser, unfollowUser } from "../../../../store/actions"

import { Button } from "@mui/material"

const FollowUnfollow = ({ authUser, user, followed }) => {
  const followedUsers = useSelector(
    (state) => state.FollowedUsers.followed_user_list
  )
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = (followee) => {
    dispatch(followUser(authUser.id, followee))
  }

  const handleUnfollow = (followed) => {
    dispatch(unfollowUser(followed?.id))
  }
  const dispatch = useDispatch()

  useEffect(() => {
    let follow = true
    follow = followedUsers.some(
      (followed) => followed?.followee.username === user.username
    )
    setIsFollowing(follow)
  }, [followedUsers])

  return !isFollowing ? (
    <Button
      variant="contained"
      fontSize="large"
      color="primary"
      onClick={() => handleFollow(user.id)}
    >
      Follow
    </Button>
  ) : (
    <Button
      variant="contained"
      fontSize="large"
      color="secondary"
      onClick={() => handleUnfollow(followed)}
    >
      Unfollow
    </Button>
  )
}

export default FollowUnfollow
