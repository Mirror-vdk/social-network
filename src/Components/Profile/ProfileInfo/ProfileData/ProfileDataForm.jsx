import s from "../ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../../../assets/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile,handleSubmit,error}) => {
    return <form className={s.profile_info} onSubmit={handleSubmit}>
        <div className={s.editButton}><button variant={"outlined"} color={"secondary"}>Сохранить</button></div>
        {error &&
        <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div className={s.profile_info_status}>
            <h1>Полное имя</h1>
            <div>{createField('Полное имя',[],"fullName",Input,s.input)}</div>
            <div className={s.looking_job}> <b>Поиск работы</b>  <div className={s.checkbox_area}>{createField('',[],"lookingForAJob",Input,s.checkbox,{type:"checkbox"})}</div></div>
            <div className={s.looking_job_description}>{createField("Мои навыки",[],"lookingForAJobDescription",Textarea,s.textarea)}</div>
            <div className={s.aboutMe}>{createField("Обо мне",[],"aboutMe", Textarea,s.textarea)}</div>
        </div>
        <div className={s.info_block}>
            <h1>Соц.сети</h1>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <div>{key}</div>
                    <div className={s.contacts}>{createField(key,[],"contacts." + key,Input,null)}</div>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm