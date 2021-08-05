import s from "./Message.module.scss"
type PropsType = {
  messages: string
}
export const Message = ({ messages }: PropsType) => {
  return (
    <li className={s.message}>{messages}</li>
  )
}