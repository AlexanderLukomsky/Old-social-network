import { ChangeEvent } from 'react'
import { ProfilePageType } from '../../../Data/oldStore/store'
import { Post } from './Post/Post'
import s from './UserPosts.module.scss'

type PropsType = {
  state: ProfilePageType
  postText: string
  addPost: (post: string) => void
  changePostText: (text: string) => void
}

export const UserPost = (
  {
    state,
    postText,
    addPost,
    changePostText,
    ...props
  }: PropsType
) => {
  const onClickHandler = () => {
    addPost(postText)
  }
  const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changePostText(e.currentTarget.value)
  }
  return (
    <div className={s.posts}>
      <div className={s.posts__input_wrapper}>
        <textarea value={postText} className={s.posts__input_message} onChange={onChangePostHandler}></textarea>
        <button onClick={onClickHandler} className={s.posts__button}>BTN</button>
      </div>
      <ul className={s.posts__list}>
        {state.posts.map(p => <Post message={p.post} likeCounter={p.likeCounter} key={p.id} />)}
      </ul>
    </div>
  )
}