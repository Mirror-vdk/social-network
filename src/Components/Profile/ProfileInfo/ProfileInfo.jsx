import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    let avaProfile = "https://pngicon.ru/file/uploads/1303507907_User_Green-128x128.png"
    return (
        <div className={s.profile_ava}>
            <img src={avaProfile} className={s.user_avatar}/>
            <div>{props.name}</div>
        </div>
    )
}
export default ProfileInfo