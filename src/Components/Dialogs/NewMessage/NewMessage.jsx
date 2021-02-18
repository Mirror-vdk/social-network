import React from "react";
import s from "./NewMessage.module.css";

const NewMessage = (props) => {
    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }
    return (
        <div className={s.public_dialogs}>
            <div>
                <textarea placeholder="Введите сообщение" className={s.dialogs_area} ref={newMessageElement}></textarea>
            </div>
            <div className={s.area_buttons}>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default NewMessage