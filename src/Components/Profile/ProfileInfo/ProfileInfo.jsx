import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/Choice_toxicity_icon.png";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataFormReduxForm from "./ProfileData/ProfileDataForm";


const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

   if (!profile ) {
       return <Preloader/>
   }
   const onProfilePhotoSelected = (e) => {
       if(e.target.files.length) {
           savePhoto(e.target.files[0])
       }
   }
   const onSubmit = (formData) => {
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
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} checkbox={s.checkbox} onSubmit={onSubmit}  />
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
        </div>
    )
}


export default ProfileInfo