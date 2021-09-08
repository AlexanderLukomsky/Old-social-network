import { ActionType } from '../../Data/store'
import s from './Profile.module.scss'
import { UserPostContainer } from './UserPosts/UserPostsContainer'
type ProfilePageType = {
  posts: Array<ProfilePageDataType>
  postText: string
}
type ProfilePageDataType = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  state: ProfilePageType
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
      <UserPostContainer
        state={props.state}
        dispatch={dispatch}
      />
    </div>
  )
}