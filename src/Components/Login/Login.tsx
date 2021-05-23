import React, {FC} from "react";
import s from "./Login.module.css"
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../assets/FormsControls/FormsControls";
import {required} from "../../ utils/validators/validators";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type  LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string

}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>




const LoginForm: FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.login_block}>
                <h1>Авторизоваться</h1>
                <div className={s.input_area}>
                    {createField<LoginFormValuesTypeKeys>("Введите логин",[required],"email",Input,s.input)}
                </div>
                <div className={s.input_area}>
                    {createField<LoginFormValuesTypeKeys>("Введите пароль",[required],"password",Input,s.input,{type:"password"})}
                </div>
                <div>
                    <div>
                        {captchaUrl && <img src={captchaUrl}/>}
                    </div>
                    <div>
                        {captchaUrl &&  createField<LoginFormValuesTypeKeys>('Введите captcha',[required],"captcha",Input,s.login_chekbox)  }
                    </div>
                </div>
                {error &&
                    <div className={s.formSummaryError}>
                        {error}
                </div>
                }
                <div className={s.login_auth}>
                        {createField <LoginFormValuesTypeKeys>(undefined,[],"rememberMe",Input,s.login_chekbox,{type:"checkbox"},"Запомнить")}
                    <div>
                        <button>Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'}) (LoginForm)



export const Login: FC = () => {

    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth )
    const dispatch = useDispatch()

    const onSubmit = (formData:any) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.login_main}>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
}


