import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
export const UserPost = () => {
  return (
    <div className={s.posts}>
      <div className={s.posts__input_wrapper}>
        <textarea className={s.posts__input_message}></textarea>
        <button type='submit' className={s.posts__button}>BTN</button>
      </div>
      <ul className={s.posts__list}>
        <Post message='post 1-1-1' />
        <Post message='post 2-2-2-2' />
      </ul>
    </div>
  )
}