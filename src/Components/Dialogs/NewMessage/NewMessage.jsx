import React from "react";
import s from "./NewMessage.module.css";

const NewMessage = (props) => {
    return (
        <div className={s.public_dialogs}>
            <div>
                <textarea placeholder="Введите сообщение" className={s.dialogs_area}></textarea>
            </div>
            <div className={s.area_buttons}>
                <button>Отправить</button>
            </div>
        </div>
    )
}

export default NewMessage