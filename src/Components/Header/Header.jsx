import React from "react";
import "./Header.module.css"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import ava from "../../assets/images/Choice_toxicity_icon.png"

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>logo</div>
            <div className={s.header_auth}>
                {
                    props.isAuth
                        ? <div className={s.item}>{props.login} <button onClick={props.logout}>Выйти</button></div>
                        : <div className={s.item_button}><button><NavLink to={'/login'}>Авторизоваться</NavLink></button></div>
                }
                    <div className={s.ava}>
                        <img src={ava}/>
                    </div>
                   </div>
        </div>
        )
}

export default Header;