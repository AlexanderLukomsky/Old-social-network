import { v1 } from "uuid"
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
export type UsersPageActionType =
  ReturnType<typeof followAC> |
  ReturnType<typeof unfollowAC> |
  ReturnType<typeof setUsersAC>
export type UsersPageType = {
  users: UsersType[]
}
export type UsersType = {
  fullName: string
  id: string
  followed: boolean
  status: string
  address: AddressType
  photoUrl: string
}
type AddressType = {
  country: string
  city: string
}
export const initialStateUsersPage: UsersPageType = {
  users: []

}
export const usersReducer = (state: UsersPageType = initialStateUsersPage, action: UsersPageActionType) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? { ...u, followed: true } : u)
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.id ? { ...u, followed: false } : u)
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    default: return state
  }
}
export const followAC = (id: string) => ({ type: FOLLOW, id } as const)
export const unfollowAC = (id: string) => ({ type: UNFOLLOW, id } as const)
export const setUsersAC = (users: UsersType[]) => ({ type: SET_USERS, users } as const)