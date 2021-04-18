import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../assets/FormsControls/FormsControls";
import {required} from "../../ utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.login_main}>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.login_block}>
                <h1>Авторизоваться</h1>
                <div className={s.input_area}>
                    {createField("Введите логин",[required],"email",Input,s.input)}
                </div>
                <div className={s.input_area}>
                    {createField("Введите пароль",[required],"password",Input,s.input,{type:"password"})}
                </div>
                <div>
                    <div>
                        {captchaUrl && <img src={captchaUrl}/>}
                    </div>
                    <div>
                        {captchaUrl &&  createField('Введите captcha',[required],"captcha","Input",s.login_chekbox)  }
                    </div>
                </div>
                {error &&
                    <div className={s.formSummaryError}>
                        {error}
                </div>
                }
                <div className={s.login_auth}>
                        {createField(null,null,"rememberMe","Input",s.login_chekbox,{type:"checkbox"},"Запомнить")}
                    <div>
                        <button>Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm)
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})



export default connect (mapStateToProps,{login}) (Login)