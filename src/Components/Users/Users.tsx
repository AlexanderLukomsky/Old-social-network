import { v1 } from "uuid"
import { UsersType } from "../../Data/usersPage-reducer"

type PropsType = {
  users: UsersType[]
  callback: (followed: boolean, id: string) => void
  setUsers: (users: UsersType[]) => void
}
export const Users = ({
  users,
  callback,
  setUsers,
  ...props
}: PropsType) => {
  users.length === 0 && setUsers(
    [
      {
        id: v1(),
        fullName: 'user1',
        followed: true, status: 'status 1', address: { country: 'Belarus', city: 'Minsk' },
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85eOo-MQKuvd-ca3tGM8Vpzyn5RyPXfevbg&usqp=CAU'
      },
      {
        id: v1(),
        fullName: 'user2', followed: false, status: 'status 2', address: { country: 'Belarus', city: 'Grodno' },
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85eOo-MQKuvd-ca3tGM8Vpzyn5RyPXfevbg&usqp=CAU'
      },
      {
        id: v1(),
        fullName: 'user3',
        followed: false, status: 'status 3', address: { country: 'Belarus', city: 'Brest' },
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85eOo-MQKuvd-ca3tGM8Vpzyn5RyPXfevbg&usqp=CAU'
      },
      {
        id: v1(),
        fullName: 'user4',
        followed: true, status: 'status 4', address: { country: 'Belarus', city: 'Gomel' },
        photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85eOo-MQKuvd-ca3tGM8Vpzyn5RyPXfevbg&usqp=CAU'
      },
    ]
  )
  return (
    <ul>
      {users.map(u =>
        <li key={u.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ maxWidth: '50px' }}>
              <img style={{ maxWidth: '100%' }} src={u.photoUrl} alt="" />
            </div>
            <button onClick={() => { callback(u.followed, u.id) }}>
              {u.followed ? 'Unfollow' : 'Follow'}
            </button>
          </div>
          <div>
            <div>
              <span>{u.fullName}</span>
              <p>{u.status}</p>
            </div>
            <div>
              <div>{u.address.country},</div>
              <div>{u.address.city}</div>
            </div>
          </div>
        </li>
      )}

    </ul>
  )
}