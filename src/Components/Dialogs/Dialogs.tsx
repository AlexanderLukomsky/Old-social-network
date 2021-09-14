import s from './Dialogs.module.scss'
import { Message } from './Message/Message'
import { Dialog } from './Dialog/Dialog'
import { ChangeEvent } from 'react'
import { DialogsPageType } from '../../Data/oldStore/store'

type PropsType = {
  state: DialogsPageType
  addMessage: (message: string) => void
  changeMessageText: (messageText: string) => void
}


export const Dialogs = (
  {
    state,
    changeMessageText,
    addMessage,
    ...props
  }: PropsType) => {
  const onClickHandler = () => {
    addMessage(state.newMessage)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeMessageText(e.currentTarget.value)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__columns}>
        <ul className={s.dialogs__dialog_list}>
          {state.dialogsData.map(d => <Dialog name={d.name} key={d.id} transitionTo={`/messages/${d.id}`} />)}
        </ul>
        <ul className={s.dialogs__messages_list}>
          {state.messagesData.map(m => <Message key={m.id} messageText={m.messages} />)}
        </ul>
      </div>
      <div>
        <textarea
          value={state.newMessage}
          onChange={onChangeHandler}
        />
        <div>
          <button onClick={onClickHandler}>add</button>
        </div>
      </div>
    </div>
  )
}