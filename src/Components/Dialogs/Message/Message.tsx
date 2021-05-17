import React, {FC} from "react";
import s from "./Message.module.css";

type PropsType = {
    message: string
    id: number
}
const Message: FC<PropsType> = (props) => {
    return (
        <div className={s.dialog_item}>
            {props.message}
        </div>
    )
}

export default Message