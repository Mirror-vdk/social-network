import React from "react";
import s from "./Users.module.css"
import {Button} from "@material-ui/core";
import * as axios from "axios";
import userPhoto from "../../assets/images/Choice_toxicity_icon.png"

const Users = (props) => {
  if (props.users.length === 0){
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
          .then(response => {props.setUsers(response.data.items)})
  }

    return <div className={s.users_main}>
        {
            props.users.map( u => <div className={s.userspage_main} key={u.id}>
                    <div className={s.users_block}>
                        <div className={s.user_container}>
                            <div className={s.users_list}>
                               <div className={s.avablock}>
                                   <div className={s.ava_item}>
                                       <img src={u.photos.small != null ? u.photos.small :  userPhoto} className={s.user_avatar}/>
                                   </div>
                                    <div className={s.ava_item}>
                                        Статус: {u.status}
                                    </div>
                               </div>
                                <div className={s.item}>
                                   Имя пользователя:  {u.name}
                                </div>
                                <div className={s.item}>
                                  Страна:  Россия
                                </div>
                                <div className={s.item}>
                                  Населеный пункт:  Владик
                                </div>
                                <div className={s.item}>
                                    {u.followed ? <Button onClick={() => {props.unfollow(u.id)}} variant="outlined" color="secondary">Отписаться</Button>
                                        : <Button onClick={() => {props.follow(u.id)}} color="primary" variant="outlined">Подписаться</Button>}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>)
        }
    </div>
}

export default Users