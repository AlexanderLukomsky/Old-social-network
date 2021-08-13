import { v1 } from "uuid"
const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
export type ActionType = {
  type: 'ADD-POST' | 'CHANGE-POST-TEXT'
  newPostText: string
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
  _addPost: (postText: string) => void
  _changePostText: (text: string) => void
  _renderTree: (state: StateType) => void
  renderTreeSubscriber: (observer: (state: StateType) => void) => void
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
      ]
    }
  },
  getState() {
    return this._state
  },

  _addPost(postText) {
    this._state.profilePageData.posts = [
      { post: postText, likeCounter: 1, id: v1() },
      ...this._state.profilePageData.posts
    ]
    this._renderTree(this._state)
  },
  _changePostText(text) {
    console.log(this._state.profilePageData);
    this._state.profilePageData.postText = text
    this._renderTree(this._state)
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: return this._addPost(action.newPostText)
      case CHANGE_POST_TEXT: return this._changePostText(action.newPostText)
    }
  },
  _renderTree(state) { },
  renderTreeSubscriber(observer: (state: StateType) => void) { this._renderTree = observer }
}
//*action creator:
type addPostActionCreatorType = (postText: string) => ActionType
type changePostActionCreatorType = (postText: string) => ActionType
export const addPostActionCreator: addPostActionCreatorType = (postText: string) => ({ type: ADD_POST, newPostText: postText })
export const changePostActionCreator: changePostActionCreatorType = (postText: string) => ({ type: CHANGE_POST_TEXT, newPostText: postText })

