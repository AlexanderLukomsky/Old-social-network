
import { addPostActionCreator, changePostActionCreator } from '../../../Data/profilePage-reducer'
import { UserPost } from './UserPosts'
import { StoreContext } from '../../StoreContext'


export const UserPostContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const addPost = (post: string) => store.dispatch(addPostActionCreator(post))
          const changePostText = (text: string) => store.dispatch(changePostActionCreator(text))
          return <UserPost
            posts={store.getState().profilePage.posts}
            postText={store.getState().profilePage.postText}
            addPost={addPost}
            changePostText={changePostText}
          />
        }
      }

    </StoreContext.Consumer>
  )
}