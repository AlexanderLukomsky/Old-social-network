import { NavLink } from 'react-router-dom'
import { StoreContext } from '../../storeContext/storeContext'
import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <StoreContext.Consumer>
      {
        (value) => (
          <div className={s.sidebar}>
            <nav className={s.nav}>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <NavLink to="/profile" className={s.nav__link} activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/messages" className={s.nav__link} activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/news" className={s.nav__link} activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/music" className={s.nav__link} activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.nav__item}>
                  <NavLink to="/settings" className={s.nav__link} activeClassName={s.active}>Settings</NavLink>
                </li>
              </ul>
            </nav >
            <ul className={s.column}>
              {value.dialogsPageData.dialogsData.map(el => <li key={el.id} className={s.column__item}>
                <NavLink className={s.column__link} to={`/messages/${el.id}`}>{el.name}</NavLink>
              </li>)}
            </ul>
          </div>
        )
      }
    </StoreContext.Consumer>
  )
}