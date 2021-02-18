import s from "./Friend.module.css";
import React from "react";

const Friend = (props) => {
    debugger
    let friendsAva = "https://pngicon.ru/file/uploads/1303507907_User_Green-128x128.png"
    return (
        <div className={s.friends_block}>
            <div>
                <img src={friendsAva} className={s.friends_ava}/>
            </div>
            <div className={s.friends_data}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend


