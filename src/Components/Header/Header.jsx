import React from "react";
import "./Header.module.css"
import s from "./Header.module.css"


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_logo}>logo</div>
            <div className={s.header_auth}>
                    <div className={s.ava}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png'/>
                    </div>
                    <div className={s.item}>Login</div>
                    <div className={s.item_button}><button>Авторизоваться</button></div>
            </div>
        </div>
        )
}

export default Header;