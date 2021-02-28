import React from "react";
import s from "./User.module.css";
import {Button} from "@material-ui/core";


const User = (props) => {
    debugger
    return (
        <div className={s.user_container}>
            <img className={s.user_avatar}/>
            <div>
                логинфысфсффсфысф
            </div>
            <div>
                Статус
            </div>
            <div>
                <Button>Подписаться</Button>
            </div>
        </div>
    )
}

export default User