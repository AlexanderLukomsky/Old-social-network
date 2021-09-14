import s from './Profile.module.scss'
import { UserPostContainer } from './UserPosts/UserPostsContainer'

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
      </div>
      <div>Ava disc</div>
      <UserPostContainer />
    </div>
  )
}