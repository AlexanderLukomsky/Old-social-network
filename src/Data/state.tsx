import { v1 } from "uuid"

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
  messagesData: Array<MessagesDataType>
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
  addPost: (postText: string) => void
  changePostText: (text: string) => void
  _renderTree: (state: StateType) => void
  renderTreeSubscriber: (observer: (state: StateType) => void) => void
}

export const store: StoreType = {
  _state: {
    profilePageData: {
      posts: [
        { post: 'firs', likeCounter: 1, id: v1() },
        { post: 'second', likeCounter: 1, id: v1() },
        { post: 'third', likeCounter: 1, id: v1() },
      ],
      postText: ''
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
      ]
    }
  },
  getState() {
    return this._state
  },

  addPost(postText: string) {
    this._state.profilePageData.posts = [
      { post: postText, likeCounter: 1, id: v1() },
      ...this._state.profilePageData.posts
    ]
    this._renderTree(this._state)
  },
  changePostText(text: string) {
    console.log(this._state.profilePageData);
    this._state.profilePageData.postText = text
    this._renderTree(this._state)
  },
  _renderTree(state: StateType) { },
  renderTreeSubscriber(observer: (state: StateType) => void) { this._renderTree = observer }
}