
import { ActionType, addMessageActionCreator, changeMessageActionCreator } from '../../Data/dialogsPage-reducer'
import { Dialogs } from './Dialogs'
type PropsType = {
  state: DialogsPageDataType
  dispatch: (action: ActionType) => void
}
type DialogsPageDataType = {
  dialogsData: Array<DialogsDataType>
  messagesData: Array<MessagesDataType>
  newMessage: string
}
type DialogsDataType = {
  name: string
  id: string
}
type MessagesDataType = {
  messages: string
  id: string
}

export const DialogsContainer = (
  {
    state,
    dispatch,
    ...props
  }: PropsType) => {
  const addMessage = (message: string) => dispatch(addMessageActionCreator(message))
  const changeMessageText = (messageText: string) => dispatch(changeMessageActionCreator(messageText))
  return (
    <Dialogs
      messageText={state.newMessage}
      messages={state.messagesData}
      dialogs={state.dialogsData}
      addMessage={addMessage}
      changeMessageText={changeMessageText}
    />
  )
}