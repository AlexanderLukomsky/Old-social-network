import s from "./Message.module.scss"
type PropsType = {
  messageText: string
}
export const Message = ({ messageText }: PropsType) => {
  return (
    <li className={s.message}>{messageText}</li>
  )
}