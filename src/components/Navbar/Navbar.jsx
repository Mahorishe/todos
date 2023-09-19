import { Link } from 'react-router-dom';
import cls from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <div className={cls.NavbarItems}>
        <Link className={cls.NavbarItem} to='/'>Главная</Link>
        <Link className={cls.NavbarItem} to='/posts'>Посты</Link>
      </div>
    </div>
  );
};