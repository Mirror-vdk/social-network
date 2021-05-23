import React, {FC, useEffect} from "react";
import s from "./Users.module.css";
import Paginator from "../../assets/Paginator/Paginator";
import User from "./User/User";
import {UserSearchForm} from "./UserSearchForm";
import {FilterType, requestUsers} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/users-selectors";


export const Users: FC = (props) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsers)
    const followingInProgress = useSelector(getFollowingInProgress)


    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])


    return <div>
        <div className={s.pages_main}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <UserSearchForm onFilterChanged={onFilterChanged}/>
        </div>
        <div className={s.users_main}>
            {users.map(u => <User user={u} key={u.id} follow={follow}
                                  followingInProgress={followingInProgress}
                                  unfollow={unfollow}/>)}
        </div>
    </div>
}
