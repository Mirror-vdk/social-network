import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/Choice_toxicity_icon.png";
const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {
   if (!profile ) {
       return <Preloader/>
   }
   const onProfilePhotoSelected = (e) => {
       if(e.target.files.length) {
           savePhoto(e.target.files[0])
       }
   }
    return (
        <div className={s.profile_ava}>
            <img src={profile.photos.large || userPhoto } className={s.user_avatar}/>
            <div>{profile.fullName}</div>
            {isOwner && <input type={"file"} className={s.loadava} onChange={onProfilePhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}
export default ProfileInfo