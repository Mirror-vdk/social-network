import React from "react";
import s from "./FormControls.module.css"
import errorimg from "../images/iconfinder_notification_error_48785.png"

export const Textarea = ({input, meta,...props}) => {

    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            {hasError && <img src={errorimg} className={s.formControl + ' ' + s.error}/>}
        </div>
    )
}