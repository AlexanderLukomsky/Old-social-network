import { NavLink } from 'react-router-dom'
import s from './Footer.module.scss'
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.footer__list}>
        <li className={s.footer__link}>
          <NavLink to="/profile" className={s.footer__link} activeClassName={s.active}>Profile</NavLink>
        </li>
        <li className={s.footer__item}>
          <NavLink to="/messages" className={s.footer__link} activeClassName={s.active}>Messages</NavLink>
        </li>
        <li className={s.footer__item}>
          <NavLink to="/news" className={s.footer__link} activeClassName={s.active}>News</NavLink>
        </li>
        <li className={s.footer__item}>
          <NavLink to="/music" className={s.footer__link} activeClassName={s.active}>Music</NavLink>
        </li>
        <li className={s.footer__item}>
          <NavLink to="/settings" className={s.footer__link} activeClassName={s.active}>Settings</NavLink>
        </li>
        <li className={s.footer__item}>
          <NavLink to="/users" className={s.footer__link} activeClassName={s.active}>Users</NavLink>
        </li>
      </ul>
    </footer >

  )
}