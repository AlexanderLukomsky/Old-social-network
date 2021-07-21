import s from './style/Navbar.module.scss'
export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <a href="/" className={`${s.nav__link} ${s.active}`}>Profile</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>Messages</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>News</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>Music</a>
        </li>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>Settings</a>
        </li>
      </ul>
    </nav >

  )
}