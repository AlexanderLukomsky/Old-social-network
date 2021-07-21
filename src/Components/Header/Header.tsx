import s from './style/Header.module.scss'
export const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header__logo}
        src="https://www.okcu.edu/uploads/administration/communications/visual-identity/img/athletic-logos/star-solid.gif" alt="" />
    </header>
  );
}