import { v1 } from "uuid"
import { DialogsPageType } from "./oldStore/store"

export type DialogsPageActionType = ReturnType<typeof changeMessageActionCreator> | ReturnType<typeof addMessageActionCreator>
const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGES_TEXT = 'CHANGE-MESSAGES-TEXT'

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
export const dialogsPageReducer = (state: DialogsPageType = initialStateDialogsPage, action: DialogsPageActionType) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messagesData: [{ messages: action.message, id: v1() }, ...state.messagesData] }
    case CHANGE_MESSAGES_TEXT:
      return { ...state, newMessage: action.message }
    default: return state
  }
}


export const changeMessageActionCreator = (message: string) => { return { type: CHANGE_MESSAGES_TEXT, message } as const }
export const addMessageActionCreator = (message: string) => { return { type: ADD_MESSAGE, message } as const }