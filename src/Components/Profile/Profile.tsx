import s from './Profile.module.scss'
import { UserPost } from './UserPosts/UserPosts'
export const Content = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__top}>
        <img
          src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="" />
      </div>
      <div>Ava disc</div>
      <div>input</div>
      <UserPost />
    </div>
  )
}