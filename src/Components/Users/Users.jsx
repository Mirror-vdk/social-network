import React from "react";
import s from "./Users.module.css"
import {Button} from "@material-ui/core";

const Users = (props) => {
    return <div className={s.users_main}>
        {
            props.users.map( u => <div className={s.userspage_main} key={u.id}>
                    <div className={s.users_block}>
                        <div className={s.user_container}>
                            <div className={s.users_list}>
                                <img src={u.photoUrl} className={s.user_avatar}/>
                                <div className={s.item}>
                                    {u.fullName}
                                </div>
                                <div className={s.item}>
                                    {u.status}
                                </div>
                                <div className={s.item}>
                                    {u.location.city}
                                </div>
                                <div className={s.item}>
                                    {u.location.country}
                                </div>
                                <div className={s.item}>
                                    {u.followed ? <Button onClick={() => {props.unfollow(u.id)}} variant="outlined" color="secondary">Отписаться</Button>
                                        : <Button onClick={() => {props.follow(u.id)}} color="inherit">Подписаться</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>)
        }
    </div>
}

export default Users