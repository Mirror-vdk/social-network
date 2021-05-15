import {ResultCodeEnum, ResultCodeForCaptcha} from "../API/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../API/auth-api";
import {securityAPI} from "../API/security-api";
import {CommonThunkType, InferActionTypes} from "./redux-store";
import {Action} from "redux";



export type InitialStateType = typeof initialState;
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>


let initialState = {
    userId: null as (number| null),
    email: null as string | null,
    login: null as string| null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null as string | null
}

const authReducer = (state = initialState, action:ActionsType): InitialStateType => {

    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {...state, ...action.data}
        case 'auth/GET_CAPTCHA_URL':
            return {...state, ...action.data.captchaUrl as {}}
        default:
            return state
    }
}

export const actions = {
    setAuthUserData : (userId:number | null, email:string | null, login:string | null, isAuth:boolean) => ({
        type: 'auth/SET_USER_DATA',
        data: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess :(captchaUrl: string) =>  ({
        type: 'auth/GET_CAPTCHA_URL',  data: {captchaUrl}
    }as const)
}



export const authMe = () : ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    {
        if (meData.resultCode === ResultCodeEnum.Success) {
            let {id, email, login} = meData.data
            dispatch(actions.setAuthUserData(id, email, login, true))
        }
    }
}
export const login = (email:string, password:string, rememberMe:boolean,captcha:string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe,captcha)
    {
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(authMe())
        }  else {
            if (data.resultCode === ResultCodeForCaptcha.captchaIsRequired) {
                dispatch(getCaptchaUrl())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "1"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl =  response.data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}
export const logout = (): ThunkType => async (dispatch:any) => {
    let response = await authAPI.logout()
    {
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer