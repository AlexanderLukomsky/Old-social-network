import { v1 } from "uuid"
import { dialogsPageReducer } from "./dialogsPage-reducer"
import { propfilePageReducer } from "./profilePage-reducer"
//******* */
type MessagesDataType = {
  messages: string
  id: string
}
export type DialogsDataType = {
  name: string
  id: string
}

type PostsType = {
  post: string
  likeCounter: number
  id: string
}
export type ProfilePageType = {
  posts: PostsType[]
  postText: string
}
export type DialogsPageType = {
  dialogsData: DialogsDataType[]
  messagesData: MessagesDataType[]
  newMessage: string
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}
//******* */


export type ActionType = {
  type: 'ADD-POST' | 'CHANGE-POST-TEXT' | 'ADD-MESSAGE' | 'CHANGE-MESSAGES-TEXT'
  message: string
}

export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _renderTree: (state: RootStateType) => void
  subscribe: (observer: (state: RootStateType) => void) => void
  dispatch: (action: ActionType) => void
}

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { post: 'firs', likeCounter: 1, id: v1() },
        { post: 'second', likeCounter: 1, id: v1() },
        { post: 'third', likeCounter: 1, id: v1() },
      ],
      postText: 'post text: '
    },
    dialogsPage: {
      dialogsData: [
        { name: 'Dima', id: v1() },
        { name: 'Igor', id: v1() },
        { name: 'Alex', id: v1() },
        { name: 'Egor', id: v1() },
      ],
      messagesData: [
        { messages: 'Hi', id: v1() },
        { messages: 'Hello', id: v1() },
        { messages: 'Wat\'s Up', id: v1() }
      ],
      newMessage: ''
    }
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    console.log(action);
    this._state.profilePage = propfilePageReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
    this._renderTree(this._state)


  },
  _renderTree(state) { },
  subscribe(observer: (state: RootStateType) => void) { this._renderTree = observer }
}


