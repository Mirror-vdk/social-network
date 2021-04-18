import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.main}>
            <ProfileInfo aboutMe={props.aboutMe} savePhoto={props.savePhoto} profile={props.profile}
                         status={props.status} isOwner={props.isOwner} updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile