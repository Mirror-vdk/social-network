import axios from "axios";
import {UsersType} from "../types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "84b20dbc-0158-43a6-a23d-5c748e05b719"}
})

export enum ResultCodeEnum  {
    Success=0,
    Error=1
}
export enum ResultCodeForCaptcha  {
    captchaIsRequired=10
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}