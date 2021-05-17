import s from "../ProfileInfo.module.css";
import {Button} from "@material-ui/core";
import React, {FC} from "react";
import {ContactsType, ProfileType} from "../../../../types/types";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
type ContactsPropsType = {
    contactTitle:string,
    contactValue: string
}


const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    const Contact : FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
        return <div className={s.contact}><b>{contactTitle}</b> {contactValue}</div>
    }

    return <div className={s.profile_info}>
        {isOwner && <div className={s.editButton}><Button variant={"outlined"} color={"secondary"}
                                                          onClick={goToEditMode}>Изменить</Button></div>}
        <div className={s.profile_info}>
            Поиск работы : {profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
            {profile.lookingForAJob && <div>Мои профнавыки: {profile.lookingForAJobDescription}</div>}
        </div>
        {Object.keys(profile.contacts).map((key) => {
            return <div key={key}>
                <div>
                    <div>
                        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>

                    </div>
                </div>
            </div>
        })}
        <div>
            <div> О себе : {profile.aboutMe || "Расскажите о себе"}</div>
        </div>
    </div>
}
export default ProfileData