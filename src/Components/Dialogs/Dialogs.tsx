import s from './Dialogs.module.scss'
import { Message } from './Message/Message'
import { UserName } from './UserName/UserName'
export const Dialogs = () => {
  return (
    <div className={s.dialogs_page}>
      <div className={s.dialogs_page__column}>
        <UserName />
        <Message />
      </div>
    </div>
  )
}