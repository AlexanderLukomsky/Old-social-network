import React, { ChangeEvent, RefObject } from 'react'
import { ActionType, addPostActionCreator, changePostActionCreator } from '../../../Data/state'
import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  profilePageState: Array<ProfilePageState>
  postText: string
  dispatch: (action: ActionType) => void
}

export const UserPost = ({ profilePageState, postText, dispatch, ...props }: PropsType) => {
  const postRef: RefObject<HTMLTextAreaElement> = React.createRef()
  const addPost = () => {
    dispatch(addPostActionCreator(postText))
  }
  const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changePostActionCreator(e.currentTarget.value))
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