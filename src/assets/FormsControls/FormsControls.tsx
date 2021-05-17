import React,  {FC} from "react";
import s from "./FormControls.module.css"
import errorimg from "../images/iconfinder_notification_error_48785.png"
import {FieldValidatorType} from "../../ utils/validators/validators";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}



const FormControl : FC<FormControlPropsType> = ({meta:{error,touched},children}) => {
    const hasError = error && touched
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            {children}
            {hasError && <img src={errorimg} className={s.formControl + ' ' + s.error}/>}
        </div>
    )
}
export const Textarea: FC<WrappedFieldProps> = (props) => {
    //const {input, meta,child,...restProps} = props
    const {input, meta,...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta,...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
export function createField <FormKeysType extends string> (placeholder:string | undefined,validators: Array<FieldValidatorType>,
                            name: FormKeysType,
                            component: FC<WrappedFieldProps>,
                            className: any, props={},text= ""){
    return (
        <div><Field placeholder={placeholder} validate={validators}
                   name={name} component={component} className={className}{...props}/>{text}</div>)
}


export type GetStringKeys<T> = Extract<keyof T, string>