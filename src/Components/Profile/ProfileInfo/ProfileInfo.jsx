import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
   if (!props.profile ) {
       return <Preloader/>
   }
   debugger
    return (
        <div className={s.profile_ava}>
            <img src={props.profile.photos.large} className={s.user_avatar}/>
            <div>{props.profile.fullName}</div>
            <ProfileStatus status="Статус"/>
        </div>
    )
}
export default ProfileInfo