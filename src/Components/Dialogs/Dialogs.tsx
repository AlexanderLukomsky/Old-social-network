import s from './Dialogs.module.scss'
import { Message } from './Message/Message'
import { Dialog } from './Dialog/Dialog'
import React, { LegacyRef } from 'react'
import { ActionType, addMessageActionCreator, changeMessageActionCreator } from '../../Data/state'
type PropsType = {
  dialogsPageData: DialogsPageDataType
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

export const Dialogs = ({ dialogsPageData, ...props }: PropsType) => {
  const addMessage = () => {
    props.dispatch(addMessageActionCreator(''))
  }
  console.log(dialogsPageData.newMessage);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__columns}>
        <ul className={s.dialogs__dialog_list}>
          {dialogsPageData.dialogsData.map(d => <Dialog name={d.name} key={d.id} transitionTo={`/messages/${d.id}`} />)}
        </ul>
        <ul className={s.dialogs__messages_list}>
          {dialogsPageData.messagesData.map(m => <Message key={m.id} messages={m.messages} />)}
        </ul>
      </div>
      <div>
        <textarea value={dialogsPageData.newMessage} onChange={(e) => props.dispatch(changeMessageActionCreator(e.currentTarget.value))}></textarea>
        <div>
          <button onClick={addMessage}>add</button>
        </div>
      </div>
    </div>
  )
}