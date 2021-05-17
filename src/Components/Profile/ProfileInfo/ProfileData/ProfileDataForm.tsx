import s from "../ProfileInfo.module.css";
import React, {FC} from "react";
import {createField, GetStringKeys, Input, Textarea} from "../../../../assets/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../types/types";




type PropsType = {
    profile : ProfileType
}

type ButtonType = {
    variant: string
    color: string
}

const Button = ({...otherProps }: ButtonType) => (
    <button {...otherProps}>
        Сохранить
    </button>
)

type ProfileDataFormKeys = GetStringKeys<ProfileType>


const ProfileDataForm: FC<InjectedFormProps<ProfileType,PropsType> & PropsType> = ({profile,handleSubmit,error}) => {
    return <form className={s.profile_info} onSubmit={handleSubmit}>
        <div className={s.editButton}><Button variant={"outlined"} color={"primary"}/></div>
        {error &&
        <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div className={s.profile_info_status}>
            <h1>Полное имя</h1>
            <div>{createField<ProfileDataFormKeys>('Полное имя',[],"fullName",Input,s.input)}</div>
            <div className={s.looking_job}> <b>Поиск работы</b>  <div className={s.checkbox_area}>{createField('',[],"lookingForAJob",Input,s.checkbox,{type:"checkbox"})}</div></div>
            <div className={s.looking_job_description}>{createField<ProfileDataFormKeys>("Мои навыки",[],"lookingForAJobDescription",Textarea,s.textarea)}</div>
            <div className={s.aboutMe}>{createField<ProfileDataFormKeys>("Обо мне",[],"aboutMe", Textarea,s.textarea)}</div>
        </div>
        <div className={s.info_block}>
            <h1>Соц.сети</h1>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <div>{key}</div>
                    // создать типизацию keys
                    <div className={s.contacts}>{createField(key,[],"contacts." + key,Input,null)}</div>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType> ({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm