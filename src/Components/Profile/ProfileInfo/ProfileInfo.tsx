import React, {ChangeEvent, FC, useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/Choice_toxicity_icon.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormReduxForm from "./ProfileData/ProfileDataForm";
import {ProfileType} from "../../../types/types";


type PropsType = {
    profile: ProfileType | null
    status: string,
    updateStatus: (status : string) => void,
    isOwner: boolean,
    savePhoto: (file : File)=> void,
    saveProfile: (profile:ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType> = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

   if (!profile ) {
       return <Preloader/>
   }
   const onProfilePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
       // убрать then
       if(e.target.files?.length) {
           savePhoto(e.target.files[0])
       }
   }
   const onSubmit = (formData: ProfileType) => {
       // убрать then
       saveProfile(formData).then (
           () => {
               setEditMode(false)
           }
       );
   }
    return (
        <div className={s.profile_ava}>
            <img src={profile.photos.large || userPhoto } className={s.user_avatar}/>
            <div>{profile.fullName}</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {isOwner && <input type={"file"} className={s.loadava} onChange={onProfilePhotoSelected}/>}
            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile}  onSubmit={onSubmit}  />
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
        </div>
    )
}


export default ProfileInfo