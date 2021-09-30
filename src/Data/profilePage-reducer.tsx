import { v1 } from "uuid"
import { ProfilePageType } from "./oldStore/store"

export type ProfilePageActiontType = ReturnType<typeof changePostActionCreator> | ReturnType<typeof addPostActionCreator>

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
export const propfilePageReducer = (state: ProfilePageType = initialStateProfilePage, action: ProfilePageActiontType) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [{ post: action.postText, likeCounter: 1, id: v1() }, ...state.posts] }
    case CHANGE_POST_TEXT:
      return { ...state, postText: action.postText }
    default: return state
  }
}


export const addPostActionCreator = (postText: string) => { return { type: ADD_POST, postText } as const }
export const changePostActionCreator = (postText: string) => { return { type: CHANGE_POST_TEXT, postText } as const }