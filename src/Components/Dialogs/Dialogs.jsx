import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/>)
    let newMessageText = state.newMessageText
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }

    if (!props.isAuth) return (
        <Redirect to={"/login"}/>
    )

    return (
        <div className={s.main}>
            <div className={s.dialogs_list}>
                {dialogsElements}
            </div>
            <div className={s.post_dialogs}>
                <div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className={s.public_dialogs} onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Введите сообщение" className={s.dialogs_area}></Field>
            </div>
            <div className={s.area_buttons}>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs