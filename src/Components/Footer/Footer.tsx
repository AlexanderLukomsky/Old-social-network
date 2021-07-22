import s from './Footer.module.scss'
export const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.footer__list}>
        <li className={`${s.footer__link} ${s.first}`}>
          <a href="/profile" className={s.footer__link}>Profile</a>
        </li>
        <li className={s.footer__item}>
          <a href="/messages" className={`${s.footer__link} ${s.active}`}>Messages</a>
        </li>
        <li className={s.footer__item}>
          <a href="/news" className={s.footer__link}>News</a>
        </li>
        <li className={s.footer__item}>
          <a href="/music" className={s.footer__link}>Music</a>
        </li>
        <li className={s.footer__item}>
          <a href="/settings" className={s.footer__link}>Settings</a>
        </li>
      </ul>
    </footer >

  )
}