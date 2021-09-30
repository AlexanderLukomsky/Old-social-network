import { connect } from "react-redux"
import { RootStateType } from "../../Data/oldStore/store"
import { followAC, setUsersAC, unfollowAC, UsersPageActionType, UsersType } from "../../Data/usersPage-reducer"
import { Users } from "./Users"

const mapStateToProps = (state: RootStateType) => ({
  users: state.usersPage.users
})
const mapDispatchToProps = (dispatch: (action: UsersPageActionType) => UsersPageActionType) => ({
  callback: (followed: boolean, id: string) => {
    followed ? dispatch(unfollowAC(id)) : dispatch(followAC(id))
  },
  setUsers: (users: UsersType[]) => {
    dispatch(setUsersAC(users))
  }
})
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
