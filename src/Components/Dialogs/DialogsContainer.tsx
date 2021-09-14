import { addMessageActionCreator, changeMessageActionCreator } from '../../Data/oldStore/dialogsPage-reducer'

import { ActionType, RootStateType } from '../../Data/oldStore/store'
import { Dialogs } from './Dialogs'
type PropsType = {
  state: RootStateType
  dispatch: (action: ActionType) => void
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
      state={state.dialogsPage}
      addMessage={addMessage}
      changeMessageText={changeMessageText}
    />
  )
}
const mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
  return {
    addMessage: (message: string) => dispatch(addMessageActionCreator(message)),
    changeMessageText: (messageText: string) => dispatch(changeMessageActionCreator(messageText))
  }
}
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)