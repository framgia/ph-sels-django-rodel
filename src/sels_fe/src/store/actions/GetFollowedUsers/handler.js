import { getFollowedUserSuccess } from "./response"

import api from "../../../adapters"

function handleFollowedUserList(dispatch) {
  ;(async () => {
    const response = await api.get(`follows/`)
    dispatch(getFollowedUserSuccess(response.data))
  })()
}

export { handleFollowedUserList }
