import {updateObjectInArray} from "../ utils/object-helpers";
import {UsersType} from "../types/types";
import {AppStateType, CommonThunkType, InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../API/users-api";



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: false,
    followingInProgress: [] as Array<number>, //array users ids
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type  InitialState = typeof initialState
export type  FilterType = typeof initialState.filter
type ActionsTypes = InferActionTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = CommonThunkType<ActionsTypes>
const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'users/SET-USERS': {
            return {...state, users: action.users}
        }
        case 'users/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'users/TOTAL_COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'users/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        case 'users/SET_FILTER' : {
            return {...state, filter: action.payload}
        }
        default:
            return state
    }
}


export const actions = {
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId}as const),
    unfollowSuccess: (userId: number) => ({type: 'users/UNFOLLOW', userId}as const),
    setUsers: (users: Array<UsersType>) => ({type: 'users/SET-USERS', users}as const),
    setCurrentPage: (currentPage: number) => ({type: 'users/SET_CURRENT_PAGE', currentPage}as const),
    setFilter: (filter:FilterType) => ({type: 'users/SET_FILTER', payload: filter}as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'users/TOTAL_COUNT', totalUsersCount}as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching}as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    }as const)
}




export const requestUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))
        let data = await usersAPI.getUsers(page, pageSize,filter.term,filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) =>{
                                       dispatch(actions.toggleFollowingProgress(true, userId))
                                       let response = await apiMethod(userId)
                                       if(response.data.resultCode == 0) {
                                       dispatch(actionCreator(userId))
                                   }
dispatch(actions.toggleFollowingProgress(false, userId))
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}


export default usersReducer