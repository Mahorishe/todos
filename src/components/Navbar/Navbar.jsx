import cls from './Navbar.module.css';
import {CustomLink} from "../CustomButton/CustomLink";

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <div className={cls.NavbarItems}>
        <CustomLink to='/'>Главная</CustomLink>
        <CustomLink to='/posts'>Посты</CustomLink>
      </div>
    </div>
  );
};