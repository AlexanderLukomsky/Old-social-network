import { connect } from 'react-redux'
import { addMessageActionCreator, changeMessageActionCreator, DialogsPageActionType } from '../../Data/dialogsPage-reducer'
import { RootStateType } from '../../Data/oldStore/store'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: RootStateType) => {
  return {
    state: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch: (action: DialogsPageActionType) => DialogsPageActionType) => {
  return {
    addMessage: (message: string) => {
      dispatch(addMessageActionCreator(message))
    },
    changeMessageText: (messageText: string) => {
      dispatch(changeMessageActionCreator(messageText))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
