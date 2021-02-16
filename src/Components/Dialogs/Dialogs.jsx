import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";


const Dialogs = () => {
    return (
        <div className={s.main}>
            <div className={s.dialogs_list}>
                <DialogItem name="Вася" id="1"/>
                <DialogItem name="Петя" id="2"/>
                <DialogItem name="Коля" id="3"/>
                <DialogItem name="Лина" id="4"/>
            </div>
            <div className={s.post_dialogs}>
                <div>
                    <Message message="Привет"/>
                    <Message message="И вам добрый день!"/>
                    <Message message=" Как ваши дела?"/>
                    <Message message=" Отлично"/>
                </div>
                <NewMessage/>
            </div>
        </div>
    )
}

export default Dialogs