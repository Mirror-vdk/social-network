import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <aside className="sidebar">
            <div>
                <NavLink to="/profile">Профиль</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Сообщения</NavLink>
            </div>
            <div>
                <div>Пользователи</div>
            </div>
        </aside>
    )
}

export default Navbar