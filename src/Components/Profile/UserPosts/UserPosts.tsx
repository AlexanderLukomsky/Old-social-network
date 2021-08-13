import React, { ChangeEvent, RefObject } from 'react'
import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePageState: Array<ProfilePageState>
  addPost: (message: string) => void
  postText: string
  changePostText: (text: string) => void
}
export const UserPost = ({ profilePageState, postText, ...props }: PropsType) => {
  const postRef: RefObject<HTMLTextAreaElement> = React.createRef()
  const addPost = () => {
    props.addPost(postText)
  }
  const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changePostText(e.currentTarget.value)
  }
  return (
    <div className={s.posts}>
      <div className={s.posts__input_wrapper}>
        <textarea ref={postRef} value={postText} className={s.posts__input_message} onChange={onChangePostHandler}></textarea>
        <button onClick={addPost} className={s.posts__button}>BTN</button>
      </div>
      <ul className={s.posts__list}>
        {profilePageState.map(p => <Post message={p.post} likeCounter={p.likeCounter} key={p.id} />)}
      </ul>
    </div>
  )
}