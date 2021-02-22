import React from "react";
import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id
    let ava = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WGxYB-NHKpUYXaZ_BGHh-JtCU6Rs32kR4Q&usqp=CAU"

    return (
        <div className={s.list_item}>
            <div>
                <img src={ava} className={s.dialogs_ava}/>
            </div>
            <div className={s.list_item + ' ' + s.active} activeClassName={s.activeLink}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}
export default DialogItem