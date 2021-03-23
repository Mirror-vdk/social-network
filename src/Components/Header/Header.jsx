import React from "react";
import "./Header.module.css"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import ava from "../../assets/images/Choice_toxicity_icon.png"

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>logo</div>
            <div className={s.header_auth}>
                {
                    props.isAuth
                        ? <div className={s.item}>{props.login} <img src={ava} className={s.ava} /> <button onClick={props.logout}>Log out</button></div>
                        : <button className={s.item_button}><NavLink to={'/login'}>Login</NavLink></button>
                }
                   </div>
        </header>
        )
}

export default Header;