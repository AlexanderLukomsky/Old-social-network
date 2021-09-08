import { ChangeEvent } from 'react'
import { Post } from './Post/Post'
import s from './UserPosts.module.scss'
type ProfilePageState = {
  post: string
  likeCounter: number
  id: string
}
type PropsType = {
  posts: ProfilePageState[]
  postText: string
  addPost: (post: string) => void
  changePostText: (text: string) => void
}

export const UserPost = (
  {
    posts,
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
        {posts.map(p => <Post message={p.post} likeCounter={p.likeCounter} key={p.id} />)}
      </ul>
    </div>
  )
}