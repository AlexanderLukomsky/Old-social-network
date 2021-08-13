import s from './Profile.module.scss'
import { UserPost } from './UserPosts/UserPosts'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePagePosts: Array<ProfilePageState>
  addPost: (message: string) => void
  postText: string
  changePostText: (text: string) => void
}
export const Profile = (props: PropsType) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
      </div>
      <div>Ava disc</div>
      <UserPost postText={props.postText} profilePageState={props.profilePagePosts} addPost={props.addPost} changePostText={props.changePostText} />
    </div>
  )
}