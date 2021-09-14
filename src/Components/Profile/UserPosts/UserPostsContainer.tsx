
import { addPostActionCreator, changePostActionCreator } from '../../../Data/oldStore/profilePage-reducer'
import { ActionType, ProfilePageType } from '../../../Data/oldStore/store'
import { UserPost } from './UserPosts'

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
  return (
    <UserPost
      state={state}
      postText={state.postText}
      addPost={addPost}
      changePostText={changePostText}
    />
  )
}