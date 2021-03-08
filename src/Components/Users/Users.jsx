import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/Choice_toxicity_icon.png";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={s.pages_block}>
            {pages.map(p => {
                return <div className={props.currentPage === p && s.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</div>
            })}
        </div>
        <div className={s.users_main}>
            {
                props.users.map(u =>
                    <div className={s.userspage_main} key={u.id}>
                        <div className={s.users_block}>
                            <div className={s.user_container}>
                                <div className={s.users_list}>
                                    <div className={s.avablock}>
                                        <div className={s.ava_img}>
                                            <NavLink to={'profile/' + u.id}>
                                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                                     className={s.user_avatar}/>
                                            </NavLink>
                                        </div>
                                        <div className={s.ava_item}>
                                            {u.status}
                                        </div>
                                    </div>
                                    <div className={s.user_body}>
                                        <div className={s.item}>
                                            Имя пользователя: {u.name}
                                        </div>
                                        <div className={s.item}>
                                            Страна: Россия
                                        </div>
                                        <div className={s.item}>
                                            Населеный пункт: Владик
                                        </div>
                                    </div>
                                    <div className={s.item}>
                                        {u.followed ? <Button onClick={() => {
                                                props.unfollow(u.id)
                                            }} variant="outlined" color="secondary">Отписаться</Button>
                                            : <Button onClick={() => {
                                                props.follow(u.id)
                                            }} color="primary" variant="outlined">Подписаться</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    </div>
}

export default Users