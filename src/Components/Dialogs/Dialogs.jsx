import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm";

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
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs