import React from "react";
import s from "./FormControls.module.css"
import errorimg from "../images/iconfinder_notification_error_48785.png"
import {required} from "../../ utils/validators/validators";
import {Field} from "redux-form";



const FormControl = ({input, meta:{error,touched},children}) => {
    const hasError = error && touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            {children}
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
export const createField = (placeholder,validators,name,component,className,props={},text= "") => (<div>
    <Field placeholder={placeholder} validate={validators}
           name={name} component={component} className={className}{...props}/>{text}
</div>)