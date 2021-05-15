import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/types";
import {profileAPI} from "../API/profile-api";
import {CommonThunkType, InferActionTypes} from "./redux-store";



let initialState = {
    posts: [
        {id: 1, post: 'Привет', likesCount: 25},
        {id: 2, post: 'И вам добрый день', likesCount: 1},
        {id: 3, post: 'Как ваши дела?', likesCount: 5},
        {id: 4, post: 'Отлично', likesCount: 211},
        {id: 5, post: 'Учишь React?', likesCount: 255},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: "",
    aboutMe: "",
    newPostText: ''
}


const profileReducer = (state = initialState, action: ActionsType) : initialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            let newPost = {
                id: 6,
                post: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ' '}
        }
        case 'profile/DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'profile/SET_ABOUT_ME': {
            return {...state, aboutMe: action.aboutMe}
        }
        case 'profile/UPDATE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType}
        }

        default:
            return state
    }
}

export const actions = {
    addPostActionCreator : (newPostText:string) => ({type: 'profile/ADD-POST', newPostText}as const),
    setUserProfile : (profile : ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile}as const),
    setStatus : (status:string) => ({type: 'profile/SET_STATUS', status}as const),
    deletePost : (postId:number)  => ({type: 'profile/DELETE_POST', postId}as const),
    updatePhoto : (photos :PhotosType)  => ({type:'profile/UPDATE_PHOTO_SUCCESS',photos}as const),
    setAboutMe :(aboutMe: string) => ({type: 'profile/SET_ABOUT_ME',aboutMe}as const)

}



export const getUserProfile = (userId:number) : ThunkType => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    {
        dispatch(actions.setUserProfile(response.data))
    }
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    {
        dispatch(actions.setStatus(response.data))
    }
}
export const getAboutMe = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getAboutMe(userId)
    {
        dispatch(actions.setAboutMe(response.data.aboutMe))
    }
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    {
        if (response.data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    {
        if (response.data.resultCode === 0) {
            dispatch(actions.updatePhoto(response.data.data.photos))
        }
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch,getState) => {
     const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            if(userId != null){
                dispatch(getUserProfile(userId))
            }
            else {
                throw new Error("Не может быть нулевым значением")
            }
        } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }

}

export type  initialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = CommonThunkType<ActionsType | FormAction>


export default profileReducer