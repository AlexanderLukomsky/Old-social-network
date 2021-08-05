import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
type ProfilePageState = {
  post: string
  likeCounter: number
}
type PropsType = {
  profilePageState: Array<ProfilePageState>
}
export const UserPost = ({ profilePageState }: PropsType) => {
  return (
    <div className={s.posts}>
      <div className={s.posts__input_wrapper}>
        <textarea className={s.posts__input_message}></textarea>
        <button type='submit' className={s.posts__button}>BTN</button>
      </div>
      <ul className={s.posts__list}>
        {profilePageState.map(p => <Post message={p.post} likeCounter={p.likeCounter} />)}
      </ul>
    </div>
  )
}