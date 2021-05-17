import React, {FC} from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null,
    status: string,
    updateStatus: (status : string) => void,
    isOwner: boolean,
    savePhoto: (file : File)=> void,
    getAboutMe: () => void,
    saveProfile: (profile:ProfileType) => Promise<any>
}


const Profile: FC<PropsType> = (props) => {
    return (
        <div className={s.main}>
            <ProfileInfo savePhoto={props.savePhoto} profile={props.profile}
                         status={props.status} isOwner={props.isOwner} updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile