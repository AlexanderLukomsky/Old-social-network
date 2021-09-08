import { v1 } from "uuid"

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGES_TEXT = 'CHANGE-MESSAGES-TEXT'
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
export type ActionType = {
  type: 'ADD-POST' | 'CHANGE-POST-TEXT' | 'ADD-MESSAGE' | 'CHANGE-MESSAGES-TEXT'
  message: string
}
const initialStateDialogsPage = {
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
export const dialogsPageReducer = (state: DialogsPageDataType = initialStateDialogsPage, action: ActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messagesData: [{ messages: action.message, id: v1() }, ...state.messagesData] }
    case CHANGE_MESSAGES_TEXT:
      return { ...state, newMessage: action.message }
    default: return state
  }
}

type changePostActionCreatorType = (postText: string) => ActionType
type addMessageActionCreatorType = (message: string) => ActionType
export const changeMessageActionCreator: changePostActionCreatorType = (message: string) => ({ type: CHANGE_MESSAGES_TEXT, message })
export const addMessageActionCreator: addMessageActionCreatorType = (message: string) => ({ type: ADD_MESSAGE, message })