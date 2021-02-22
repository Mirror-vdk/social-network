import s from "./Friend.module.css";
import React from "react";

const Friend = (props) => {
    let friendsAva = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png"
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


