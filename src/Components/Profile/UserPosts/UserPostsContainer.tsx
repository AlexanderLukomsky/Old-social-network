
import { addPostActionCreator, changePostActionCreator } from '../../../Data/profilePage-reducer'
import { UserPost } from './UserPosts'
import { connect } from 'react-redux'
import { RootStateType } from '../../../Data/oldStore/store'

const mapStateToProps = (state: RootStateType) => ({
  posts: state.profilePage.posts,
  postText: state.profilePage.postText
})
const mapDispatchToProps = (dispatch: any) => ({
  addPost: (post: string) => { dispatch(addPostActionCreator(post)) },
  changePostText: (text: string) => dispatch(changePostActionCreator(text))
})
export const UserPostContainer = connect(mapStateToProps, mapDispatchToProps)(UserPost)