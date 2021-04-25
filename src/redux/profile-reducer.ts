import {profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostsType, ProfileType} from "../types/types";

const ADD_POST = ' profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS'
const SET_ABOUT_ME = 'profile/SET_ABOUT_ME'




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

export type  initialStateType = typeof initialState


const profileReducer = (state = initialState, action: any) : initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ' '}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_ABOUT_ME: {
            return {...state, aboutMe: action.aboutMe}
        }

        case UPDATE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}as ProfileType}
        }
        default:
            return state
    }
}

 type AddPostActionCreatorType = {
    type: typeof ADD_POST,
     newPostText: string
 }
 type SetUserProfileActionCreatorType = {
    type: typeof SET_USER_PROFILE,
     profile: ProfileType
 }
 type SetStatusActionCreatorType = {
    type: typeof SET_STATUS,
    status: string
 }
 type DeletePostActionCreatorType = {
    type: typeof DELETE_POST,
    postId: number
 }
 type UpdatePhotoActionCreatorType = {
    type: typeof UPDATE_PHOTO_SUCCESS,
    photos: PhotosType
 }
 type SetAboutMeActionCreatorType = {
    type: typeof SET_ABOUT_ME,
     aboutMe: string
 }


export const addPostActionCreator = (newPostText:string) :AddPostActionCreatorType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile : ProfileType) : SetUserProfileActionCreatorType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status:string):SetStatusActionCreatorType => ({type: SET_STATUS, status})
export const deletePost = (postId:number) :DeletePostActionCreatorType => ({type: DELETE_POST, postId})
export const updatePhoto = (photos :PhotosType): UpdatePhotoActionCreatorType  => ({type:UPDATE_PHOTO_SUCCESS,photos})
export const setAboutMe = (aboutMe: string): SetAboutMeActionCreatorType => ({type: SET_ABOUT_ME,aboutMe})

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
    {
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId: number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    {
        dispatch(setStatus(response.data))
    }
}
export const getAboutMe = (userId: number) => async (dispatch:any) => {
    let response = await profileAPI.getAboutMe(userId)
    {
        dispatch(setAboutMe(response.data.aboutMe))
    }
}
export const updateStatus = (status: string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const savePhoto = (file: any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    {
        if (response.data.resultCode === 0) {
            dispatch(updatePhoto(response.data.data.photos))
        }
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch :any,getState:any) => {
     const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }

}


export default profileReducer