import React, {FC} from "react";
import "./Header.module.css"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import ava from "../../assets/images/Choice_toxicity_icon.png"

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}


const Header : FC <MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header_logo}>logo</div>
            <div className={s.header_auth}>
                {
                    props.isAuth
                        ? <div className={s.item}>{props.login} <img src={ava} className={s.ava} /> <button onClick={props.logout}>Выйти</button></div>
                        : <button className={s.item_button}><NavLink to={'/login'}>Войти</NavLink></button>
                }
                   </div>
        </header>
        )
}

export default Header;