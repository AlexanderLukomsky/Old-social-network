import s from './Post.module.scss'
type PropsType = {
  message: string
}
export const Post = (props: PropsType) => {
  return (
    <li className={s.post}>
      <img className={s.post__avatar}
        src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="" />
      <p className={s.post__text}>
        {props.message}
      </p>
    </li>
  )
}