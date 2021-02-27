import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = (props) => {
    debugger
    return (
        <aside className={s.sidebar}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users"  activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
            <FriendsContainer/>
        </aside>
    )
}

export default Navbar