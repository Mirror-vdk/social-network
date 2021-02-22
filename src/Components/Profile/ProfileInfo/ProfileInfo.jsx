import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    let avaProfile = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png"
    return (
        <div className={s.profile_ava}>
            <img src={avaProfile} className={s.user_avatar}/>
            <div>{props.name}</div>
        </div>
    )
}
export default ProfileInfo