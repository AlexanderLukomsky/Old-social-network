import s from './Profile.module.scss'
import { UserPost } from './UserPosts/UserPosts'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePageState: Array<ProfilePageState>
}
export const Profile = (props: PropsType) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
      </div>
      <div>Ava disc</div>
      <UserPost profilePageState={props.profilePageState} />
    </div>
  )
}