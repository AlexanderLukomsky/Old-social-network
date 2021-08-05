import s from './Post.module.scss'
type PropsType = {
  message: string
  likeCounter: number
}
export const Post = ({ message, likeCounter }: PropsType) => {
  return (
    <li className={s.post}>
      <img className={s.post__avatar}
        src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="" />
      <p className={s.post__text}>
        {message}
        <br />
        <span>{likeCounter}</span>
      </p>
    </li>
  )
}