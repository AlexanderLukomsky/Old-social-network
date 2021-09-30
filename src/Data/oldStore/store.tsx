import { DialogsPageActionType } from "../dialogsPage-reducer"
import { ProfilePageActiontType } from "../profilePage-reducer"
import { UsersPageType } from "../usersPage-reducer"
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
  usersPage: UsersPageType
}
export type StoreType = {
  _state: RootStateType
  getState: () => RootStateType
  _renderTree: (state: RootStateType) => void
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionTypes) => void
}

type ActionTypes = ProfilePageActiontType | DialogsPageActionType



