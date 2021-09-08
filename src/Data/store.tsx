import { v1 } from "uuid"
import { dialogsPageReducer } from "./dialogsPage-reducer"
import { propfilePageReducer } from "./profilePage-reducer"
export type ActionType = {
  type: 'ADD-POST' | 'CHANGE-POST-TEXT' | 'ADD-MESSAGE' | 'CHANGE-MESSAGES-TEXT'
  message: string
}
type ProfilePageType = {
  posts: Array<ProfilePageDataType>
  postText: string
}
type ProfilePageDataType = {
  post: string
  likeCounter: number
  id: string
}
type DialogsPageDataType = {
  dialogsData: Array<DialogsDataType>
  messagesData: MessagesDataType[]
  newMessage: string
}
export type DialogsDataType = {
  name: string
  id: string
}
type MessagesDataType = {
  messages: string
  id: string
}
export type StateType = {
  profilePageData: ProfilePageType
  dialogsPageData: DialogsPageDataType
}

export type StoreType = {
  _state: StateType
  getState: () => StateType
  _renderTree: (state: StateType) => void
  subscribe: (observer: (state: StateType) => void) => void
  dispatch: (action: ActionType) => void
}

export const store: StoreType = {
  _state: {
    profilePageData: {
      posts: [
        { post: 'firs', likeCounter: 1, id: v1() },
        { post: 'second', likeCounter: 1, id: v1() },
        { post: 'third', likeCounter: 1, id: v1() },
      ],
      postText: 'post text: '
    },
    dialogsPageData: {
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
    this._state.profilePageData = propfilePageReducer(this._state.profilePageData, action)
    this._state.dialogsPageData = dialogsPageReducer(this._state.dialogsPageData, action)
    this._renderTree(this._state)


  },
  _renderTree(state) { },
  subscribe(observer: (state: StateType) => void) { this._renderTree = observer }
}