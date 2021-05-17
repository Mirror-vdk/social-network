import s from "../MyPosts.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Textarea} from "../../../../assets/FormsControls/FormsControls";
import {required} from "../../../../ utils/validators/validators";
import React, {FC} from "react";

type PropsType = {

}
export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType,PropsType> & PropsType> = (props) => {
    return (
        <form className={s.Newpost_block} onSubmit={props.handleSubmit}>
            {createField<AddPostFormValuesTypeKeys>("Введите текст",[required],"newPostText",Textarea,s.textarea)}
            <div className={s.button_area}>
                <button className={s.button_post}>Добавить</button>
            </div>
            <div className={s.button_area}>
                <button className={s.button_post}>Удалить</button>
            </div>
        </form>
    )
}
export default reduxForm<AddPostFormValuesType,PropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)
