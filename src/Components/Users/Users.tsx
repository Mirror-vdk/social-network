import React, {FC} from "react";
import s from "./Users.module.css";
import Paginator from "../../assets/Paginator/Paginator";
import User from "./User/User";
import {UsersType} from "../../types/types";
import {UserSearchForm} from "./UserSearchForm";
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber : number) => void,
    onFilterChanged: (filter: FilterType) => void,
    currentPage: number,
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId:number) => void
    follow: (userId:number) => void
}


let Users : FC<PropsType> = ({currentPage,onPageChanged,totalUsersCount,pageSize, users,...props}) => {
    return <div>
        <div className={s.pages_main}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            <UserSearchForm onFilterChanged={props.onFilterChanged}/>
        </div>
        <div className={s.users_main}>
            {users.map(u => <User user={u} key={u.id} follow={props.follow}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow} />)}
        </div>
    </div>
}


export default Users