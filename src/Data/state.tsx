type ProfilePageDataType = {
  post: string
  likeCounter: number
}
type DialogsPageDataType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
}
type DialogsDataType = {
  name: string
  id: number
}
type MessagesDataType = {
  messages: string
  id: number
}
export type StateType = {
  profilePageData: Array<ProfilePageDataType>
  dialogsPageData: DialogsPageDataType
}
export const state: StateType = {
  profilePageData: [{ post: 'firs', likeCounter: 1 }, { post: 'second', likeCounter: 1 }, { post: 'third', likeCounter: 1 }],
  dialogsPageData: {
    dialogsData: [
      { name: 'Dima', id: 1 },
      { name: 'Igor', id: 2 },
      { name: 'Alex', id: 3 },
      { name: 'Oleg', id: 4 }
    ],
    messagesData: [
      { messages: 'Hi', id: 1 },
      { messages: 'Hello', id: 2 },
      { messages: 'Wat\'s Up', id: 3 }
    ]
  }
}