import React, {FC} from "react";
import s from "./Dialogs.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../assets/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../ utils/validators/validators";
import {NewMassageFormType} from "./Dialogs";

const maxLength30 = maxLengthCreator(30)
type NewMassageFormTypeKeys = Extract<keyof NewMassageFormType, string>
type PropsType = {}

const AddMessageForm: FC<InjectedFormProps<NewMassageFormType,PropsType> &PropsType> = (props) => {
    return (
        <form className={s.public_dialogs} onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMassageFormTypeKeys>("Введите сообщение",[required,maxLength30],"newMessageText",Textarea,s.dialogs_area)}
            </div>
            <div className={s.area_buttons}>
                <button>Отправить</button>
            </div>
        </form>
    )
}
export default reduxForm <NewMassageFormType,PropsType> ({form: "dialogAddMessageForm"})(AddMessageForm);