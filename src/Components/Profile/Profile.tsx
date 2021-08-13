import { ActionType } from '../../Data/state'
import s from './Profile.module.scss'
import { UserPost } from './UserPosts/UserPosts'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePagePosts: Array<ProfilePageState>
  postText: string
  dispatch: (action: ActionType) => void
}
export const Profile = ({ dispatch, ...props }: PropsType) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
      </div>
      <div>Ava disc</div>
      <UserPost postText={props.postText} profilePageState={props.profilePagePosts} dispatch={dispatch} />
    </div>
  )
}