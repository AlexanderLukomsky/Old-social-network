import { addMessageActionCreator, changeMessageActionCreator } from '../../Data/dialogsPage-reducer'
import { StoreContext } from '../StoreContext'
import { Dialogs } from './Dialogs'
export const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const addMessage = (message: string) => store.dispatch(addMessageActionCreator(message))
          const changeMessageText = (messageText: string) => store.dispatch(changeMessageActionCreator(messageText))
          return <Dialogs
            state={store.getState().dialogsPage}
            addMessage={addMessage}
            changeMessageText={changeMessageText}
          />
        }
      }
    </StoreContext.Consumer>
  )
}
