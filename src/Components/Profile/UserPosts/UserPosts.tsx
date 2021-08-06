import React, { RefObject } from 'react'
import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePageState: Array<ProfilePageState>
}
export const UserPost = ({ profilePageState }: PropsType) => {
  const postRef: RefObject<HTMLTextAreaElement> = React.createRef()
  const addPost = () => {
    console.log(postRef.current?.value);
  }

  return (
    <div className={s.posts}>
      <div className={s.posts__input_wrapper}>
        <textarea ref={postRef} className={s.posts__input_message}></textarea>
        <button onClick={addPost} className={s.posts__button}>BTN</button>
      </div>
      <ul className={s.posts__list}>
        {profilePageState.map(p => <Post message={p.post} likeCounter={p.likeCounter} key={p.id} />)}
      </ul>
    </div>
  )
}