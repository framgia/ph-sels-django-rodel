import {
  postChoiceSuccess,
  postBulkChoiceSuccess,
  getChoiceSuccess,
  getChoiceListSuccess,
  updateChoiceSuccess,
  deleteChoiceSuccess,
} from "./response"

import api from "../../../adapters"

function handlePostChoice(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`choice/`, post_data)
    dispatch(postChoiceSuccess(response.data))
  })()
}

function handlePostBulkChoice(post_data, dispatch) {
  ;(async () => {
    const response = await api.post(`choices/bulk/`, post_data)
    dispatch(postBulkChoiceSuccess(response.data))
  })()
}

function handleGetChoice(choice_id, dispatch) {
  ;(async () => {
    const response = await api.get(`choice/${choice_id}/`)
    dispatch(getChoiceSuccess(response.data))
  })()
}

function handleGetChoiceList(dispatch) {
  ;(async () => {
    const response = await api.get(`choice/`)
    dispatch(getChoiceListSuccess(response.data))
  })()
}

function handleUpdateChoice(choice_id, data, dispatch) {
  ;(async () => {
    const response = await api.put(`choice/${choice_id}/`, data)
    dispatch(updateChoiceSuccess(response.data))
  })()
}

function handleDeleteChoice(choice_id, dispatch) {
  ;(async () => {
    await api.delete(`choice/${choice_id}/`)
    dispatch(deleteChoiceSuccess(choice_id))
  })()
}

export {
  handlePostChoice,
  handlePostBulkChoice,
  handleGetChoice,
  handleGetChoiceList,
  handleUpdateChoice,
  handleDeleteChoice,
}
