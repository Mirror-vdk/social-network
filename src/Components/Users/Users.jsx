import React from "react";
import s from "./Users.module.css";
import Paginator from "../../assets/Paginator/Paginator";
import User from "./User/User";


let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize, users,...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div className={s.users_main}>
            {users.map(u => <User user={u} key={u.id} follow={props.follow}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow} />)}
        </div>
    </div>
}

export default Users