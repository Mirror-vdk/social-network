import React from "react";
import s from "./FormControls.module.css"
import errorimg from "../images/iconfinder_notification_error_48785.png"



const FormControl = ({input, meta,child,...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            {props.children}
            {hasError && <img src={errorimg} className={s.formControl + ' ' + s.error}/>}
        </div>
    )
}
export const Textarea = (props) => {

    const {input, meta,child,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta,child,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}