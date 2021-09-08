import { addPostActionCreator, changePostActionCreator } from '../../../Data/profilePage-reducer'
import { ActionType } from '../../../Data/store'
import { UserPost } from './UserPosts'
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
export const UserPostContainer = (
  {
    state,
    dispatch,
  }: PropsType
) => {
  const addPost = (post: string) => dispatch(addPostActionCreator(post))
  const changePostText = (text: string) => dispatch(changePostActionCreator(text))
  console.log(state);
  return (
    <UserPost
      posts={state.posts}
      postText={state.postText}
      addPost={addPost}
      changePostText={changePostText}
    />
  )
}