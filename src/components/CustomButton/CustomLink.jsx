import {Link, useMatch} from "react-router-dom";
import cls from './CustomLink.module.css'

export const CustomLink = ({children, to, ...props}) => {
    const active = useMatch(to)
    return (
        <Link to={to} className={active ? [cls.NavbarItem, cls.NavbarItemActive].join(' ') : cls.NavbarItem } {...props}>{children}</Link>
    )
}