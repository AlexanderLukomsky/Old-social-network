import s from './Dialogs.module.scss'
import { Message } from './Message/Message'
import { Dialog } from './Dialog/Dialog'
import { ChangeEvent, RefObject } from 'react'
import React from 'react'
type PropsType = {
  messages: MessagesDataType[]
  dialogs: DialogsDataType[]
  messageText: string
  addMessage: (message: string) => void
  changeMessageText: (messageText: string) => void
}
type DialogsDataType = {
  name: string
  id: string
}
type MessagesDataType = {
  messages: string
  id: string
}

export const Dialogs = (
  {
    messages,
    dialogs,
    messageText,
    changeMessageText,
    addMessage,
    ...props
  }: PropsType) => {
  const onClickHandler = () => {
    addMessage(messageText)
  }
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeMessageText(e.currentTarget.value)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__columns}>
        <ul className={s.dialogs__dialog_list}>
          {dialogs.map(d => <Dialog name={d.name} key={d.id} transitionTo={`/messages/${d.id}`} />)}
        </ul>
        <ul className={s.dialogs__messages_list}>
          {messages.map(m => <Message key={m.id} messageText={m.messages} />)}
        </ul>
      </div>
      <div>
        <textarea
          value={messageText}
          onChange={onChangeHandler}
        />
        <div>
          <button onClick={onClickHandler}>add</button>
        </div>
      </div>
    </div>
  )
}