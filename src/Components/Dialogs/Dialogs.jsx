import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m =>  <Message message={m.message} id={m.id}/>)
    return (
        <div className={s.main}>
            <div className={s.dialogs_list}>
                {dialogsElements}
            </div>
            <div className={s.post_dialogs}>
                <div>
                    {messagesElements}
                </div>
                <NewMessage/>
            </div>
        </div>
    )
}

export default Dialogs