import {
  POST_CHOICE_SUCCESS,
  POST_CHOICE_FAIL,
  GET_CHOICE_SUCCESS,
  GET_CHOICE_FAIL,
  GET_CHOICE_LIST_SUCCESS,
  GET_CHOICE_LIST_FAIL,
  UPDATE_CHOICE_SUCCESS,
  UPDATE_CHOICE_FAIL,
  DELETE_CHOICE_SUCCESS,
  DELETE_CHOICE_FAIL,
} from "../actions/Choice/action-types"

export const initialState = {
  choice_list: [],
  msg: "",
  error: null,
}

const postChoiceSuccess = (state = initialState, action) => {
  return {
    ...state,
    choice_list: [...state.choice_list, action.payload.choice],
    msg: "New choice has created.",
    error: null,
  }
}

const postChoiceFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getChoiceSuccess = (state = initialState, action) => {
  return {
    ...state,
    choice_list: [
      ...state.choice_list,
      state.choice_list.map((choice) =>
        choice.id === action.payload.choice.id ? action.payload.choice : choice
      ),
    ],
    error: null,
  }
}

const getChoiceFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const getChoiceListSuccess = (state = initialState, action) => {
  return { ...state, choice_list: action.payload.choices, error: null }
}

const getChoiceListFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const updateChoiceSuccess = (state = initialState, action) => {
  return {
    ...state,
    choice_list: [
      state.choice_list.find((choice) =>
        choice.id === action.payload.choice.id ? action.payload.choice : choice
      ),
    ],
    error: null,
  }
}

const updateChoiceFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const deleteChoiceSuccess = (state = initialState, action) => {
  return {
    ...state,
    choice_list: state.choice_list.filter(
      (choice) => parseInt(choice.id) !== parseInt(action.payload.choice_id)
    ),
    msg: "choice deleted",
    error: null,
  }
}

const deleteChoiceFail = (state = initialState, action) => {
  return { ...state, msg: action.payload.msg, error: action.payload.error }
}

const choiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CHOICE_SUCCESS:
      return postChoiceSuccess(state, action)
    case POST_CHOICE_FAIL:
      return postChoiceFail(state, action)
    case GET_CHOICE_SUCCESS:
      return getChoiceSuccess(state, action)
    case GET_CHOICE_FAIL:
      return getChoiceFail(state, action)
    case GET_CHOICE_LIST_SUCCESS:
      return getChoiceListSuccess(state, action)
    case GET_CHOICE_LIST_FAIL:
      return getChoiceListFail(state, action)
    case UPDATE_CHOICE_SUCCESS:
      return updateChoiceSuccess(state, action)
    case UPDATE_CHOICE_FAIL:
      return updateChoiceFail(state, action)
    case DELETE_CHOICE_SUCCESS:
      return deleteChoiceSuccess(state, action)
    case DELETE_CHOICE_FAIL:
      return deleteChoiceFail(state, action)
    default:
      return state
  }
}

export { choiceReducer }
