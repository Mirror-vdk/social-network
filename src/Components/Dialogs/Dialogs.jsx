import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let newMessageElement = React.createRef()

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/>)
    let newMessageText = state.newMessageText
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
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
               <div className={s.public_dialogs}>
                   <div>
                       <textarea value={newMessageText} onChange={onNewMessageChange} placeholder="Введите сообщение" className={s.dialogs_area} ref={newMessageElement}></textarea>
                   </div>
                   <div className={s.area_buttons}>
                       <button onClick={onSendMessageClick}>Отправить</button>
                   </div>
               </div>

            </div>
        </div>
    )
}

export default Dialogs