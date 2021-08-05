import s from './Dialogs.module.scss'
import { Message } from './Message/Message'
import { Dialog } from './Dialog/Dialog'
type PropsType = {
  dialogsPageData: DialogsPageDataType
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
export const Dialogs = ({ dialogsPageData }: PropsType) => {
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
    </div>
  )
}