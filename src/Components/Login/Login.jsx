import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Button} from "@material-ui/core";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={s.login_main}>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.login_block}>
                <h1>Авторизоваться</h1>
                <div className={s.input_area}>
                    <Field placeholder={"Введите логин"} name={"login"} component={"input"} className={s.input}/>
                </div>
                <div className={s.input_area}>
                    <Field placeholder={"Введите пароль"} name={"password"} component={"input"} className={s.input}/>
                </div>
                <div className={s.login_auth}>
                    <div className={s.login_chekbox}>
                        <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Запомнить
                    </div>
                    <div>
                        <Button variant="outlined" color="secondary">Войти</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm ({
    form: 'login'
}) (LoginForm)

export default Login