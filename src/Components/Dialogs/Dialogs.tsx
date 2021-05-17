import React, {FC} from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm";
import {initialStateType} from "../../redux/dialogs-reducer";


export type  NewMassageFormType = {
    newMessageText: string
}


type PropsType = {
    dialogsPage : initialStateType
    sendMessage: (newMessageText: string) => void
}


const Dialogs: FC<PropsType> = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/>)

    let addNewMessage = (values:NewMassageFormType) => {
        props.sendMessage(values.newMessageText)
    }

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