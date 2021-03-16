import React from "react";
import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../assets/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../ utils/validators/validators";

const maxLength30 = maxLengthCreator(30)

const AddMessageForm = (props) => {
    return (
        <form className={s.public_dialogs} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength30 ]} name="newMessageText" placeholder="Введите сообщение" className={s.dialogs_area}></Field>
            </div>
            <div className={s.area_buttons}>
                <button>Отправить</button>
            </div>
        </form>
    )
}
export default reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)