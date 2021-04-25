import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../ utils/object-helpers";
import { PhotosType, UsersType } from "../types/types";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'





let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: false,
    followingInProgress: [] as Array<number> //array users ids
}

export type  InitialStateType = typeof initialState

const usersReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

type FollowSuccessActionCreatorType = {
    type: typeof FOLLOW,
    userId: number
}
type UnFollowSuccessActionCreatorType = {
    type: typeof UNFOLLOW,
    userId: number
}
type SetUsersActionCreatorType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}
type SetCurrentPageActionCreatorType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type SetTotalUsersCountActionCreatorType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
type ToggleIsFetchingActionCreatorType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
type ToggleFollowingProgressActionCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching:boolean
    userId: number
}



export const followSuccess = (userId:number):FollowSuccessActionCreatorType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnFollowSuccessActionCreatorType => ({type: UNFOLLOW, userId})
export const setUsers = (users :Array<UsersType>) : SetUsersActionCreatorType  => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number):SetCurrentPageActionCreatorType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionCreatorType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionCreatorType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressActionCreatorType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})



export const requestUsers = (page:number, pageSize:number) => {
    return async (dispatch:any)  => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
const followUnfollowFlow = async (dispatch:any, userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId,usersAPI.follow.bind(usersAPI),followSuccess)
    }
}
export const unfollow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch, userId,usersAPI.unfollow.bind(usersAPI),unfollowSuccess)
    }
}


export default usersReducer