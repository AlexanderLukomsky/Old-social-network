import { NavLink } from 'react-router-dom'
import s from './Dialog.module.scss'
type propsType = {
  transitionTo: string
  name: string
}
export const Dialog = ({ name, ...props }: propsType) => {
  return (
    <li className={s.dialog}>
      <NavLink to={props.transitionTo} className={s.dialog__link}>{name}</NavLink>
    </li>

  )
}
