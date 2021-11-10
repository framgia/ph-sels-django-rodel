import { getAuthUserDetailsSuccess } from "./response"

import api from "../../../adapters"

function handleGetAuthUserDetails(dispatch) {
  ;(async () => {
    const authUser = localStorage.getItem("auth_user")
    const response = await api.get(`users/${authUser}/`)
    dispatch(getAuthUserDetailsSuccess(response.data))
  })()
}

export { handleGetAuthUserDetails }
