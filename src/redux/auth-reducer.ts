import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL'

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captchaUrl: string | null
}


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action:any): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, ...action.data.captchaUrl}
        default:
            return state
    }
}

type setAuthUserDataType = {
    userId: number | null, email: string | null, login:string | null, isAuth:boolean
}
type setAuthUserActionDataType = {
    type: typeof SET_USER_DATA
    data: setAuthUserDataType
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth:boolean): setAuthUserActionDataType => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    data: {captchaUrl : string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string):getCaptchaUrlSuccessActionType  => ({
    type: GET_CAPTCHA_URL_SUCCESS,  data: {captchaUrl}
})

export const authMe = () => async (dispatch:any) => {
    let response = await authAPI.me()
    {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}


export const login = (email:string, password:string, rememberMe:boolean,captcha:string) => async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe,captcha)
    {
        if (response.data.resultCode === 0) {
            dispatch(authMe())
        }  else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "1"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl =  response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = () => async (dispatch:any) => {
    let response = await authAPI.logout()
    {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer