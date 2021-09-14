import { v1 } from "uuid"
import { ActionType, ProfilePageType } from "./store"

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

const initialStateProfilePage = {
  posts: [
    { post: 'firs', likeCounter: 1, id: v1() },
    { post: 'second', likeCounter: 1, id: v1() },
    { post: 'third', likeCounter: 1, id: v1() },
  ],
  postText: 'post text: '
}
export const propfilePageReducer = (state: ProfilePageType = initialStateProfilePage, action: ActionType) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [{ post: action.message, likeCounter: 1, id: v1() }, ...state.posts] }
    case CHANGE_POST_TEXT:
      return { ...state, postText: action.message }
    default: return { ...state }
  }
}
type addPostActionCreatorType = (postText: string) => ActionType
type changePostActionCreatorType = (postText: string) => ActionType
export const addPostActionCreator: addPostActionCreatorType = (postText: string) => ({ type: ADD_POST, message: postText })
export const changePostActionCreator: changePostActionCreatorType = (postText: string) => ({ type: CHANGE_POST_TEXT, message: postText })