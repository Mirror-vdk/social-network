import React from "react";
import s from "./Friends.module.css"
import Friend from "./Friend/Friend";


const Friends =(props) => {
    let friendsElements =
        props.friends.map(f => <Friend friend={f.friend} id={f.id} name={f.name} /> )

    return (
        <div className={s.friends_container}>
            <h1>Друзья</h1>
            <div>
                {friendsElements}
            </div>
        </div>

    )
}
export default Friends