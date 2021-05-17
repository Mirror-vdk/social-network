import React, {FC} from "react";
import s from "./User.module.css";
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/Choice_toxicity_icon.png";
import {UsersType} from "../../../types/types";


type PropsType = {
    user : UsersType,
    followingInProgress: Array<number>,
    unfollow: (userId:number) => void
    follow: (userId:number) => void
}

let User : FC<PropsType> = ({user,followingInProgress,unfollow,follow}) => {
    return (
                    <div className={s.userspage_main} key={user.id}>
                        <div className={s.users_block}>
                            <div className={s.user_container}>
                                <div className={s.users_list}>
                                    <div className={s.avablock}>
                                        <div className={s.ava_img}>
                                            <NavLink to={'profile/' + user.id}>
                                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                                     className={s.user_avatar}/>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className={s.user_body}>
                                        <div className={s.item}>
                                            Имя пользователя: {user.name}
                                        </div>
                                        <div className={s.item}>
                                            Страна: Россия
                                        </div>
                                        <div className={s.item}>
                                            Населеный пункт: Владик
                                        </div>
                                        <div className={s.ava_item}>
                                           Статус {user.status}
                                        </div>
                                    </div>
                                    <div className={s.item}>
                                        {user.followed ? <Button disabled={followingInProgress
                                                .some(id => id === user.id)}
                                                              onClick={() => {
                                                                  unfollow(user.id)
                                                              }} variant="outlined"
                                                              color="secondary">Отписаться</Button>
                                            : <Button disabled={followingInProgress.some(id => id === user.id)}
                                                      onClick={() => {
                                                          follow(user.id)
                                                      }} color="primary" variant="outlined">
                                                Подписаться</Button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
}

export default User