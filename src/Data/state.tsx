import { v1 } from "uuid"

type ProfilePageDataType = {
  post: string
  likeCounter: number
  id: string
}
type DialogsPageDataType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}
type DialogsDataType = {
  name: string
  id: string
}
type MessagesDataType = {
  messages: string
  id: string
}
export type StateType = {
  profilePageData: Array<ProfilePageDataType>
  dialogsPageData: DialogsPageDataType
}
export const state: StateType = {
  profilePageData: [
    { post: 'firs', likeCounter: 1, id: v1() },
    { post: 'second', likeCounter: 1, id: v1() },
    { post: 'third', likeCounter: 1, id: v1() }],
  dialogsPageData: {
    dialogsData: [
      { name: 'Dima', id: v1() },
      { name: 'Igor', id: v1() },
      { name: 'Alex', id: v1() },
      { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Dima', id: v1() },
      // { name: 'Igor', id: v1() },
      // { name: 'Alex', id: v1() },
      // { name: 'Oleg', id: v1() }
    ],
    messagesData: [
      { messages: 'Hi', id: v1() },
      { messages: 'Hello', id: v1() },
      { messages: 'Wat\'s Up', id: v1() }
    ]
  }
}