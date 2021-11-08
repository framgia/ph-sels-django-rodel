import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { followUser, unfollowUser } from "../../../../store/actions"

import { Button } from "@mui/material"

const FollowUnfollow = ({ user, followed }) => {
  const authUser = useSelector((state) => state.AuthUser.data)
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
      (followed) => followed?.followee.username === user?.username
    )
    setIsFollowing(follow)
  }, [followedUsers, user])

  return authUser?.id !== user?.id ? (
    !isFollowing ? (
      <Button
        variant="contained"
        fontSize="large"
        color="primary"
        onClick={() => handleFollow(user?.id)}
        style={{ width: "25ch", borderRadius: "60% 0", alignSelf: "center" }}
      >
        Follow
      </Button>
    ) : (
      <Button
        variant="contained"
        fontSize="large"
        color="secondary"
        onClick={() => handleUnfollow(followed)}
        style={{ width: "25ch", borderRadius: "0 60%", alignSelf: "center" }}
      >
        Unfollow
      </Button>
    )
  ) : null
}

export default FollowUnfollow
