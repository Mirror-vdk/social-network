import React, {ChangeEvent, FC, useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks : FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "Статус отсутсвует"}</span>
            </div>}
            {editMode &&
            <textarea onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus={true}
                      className={s.status_area}/>
            }
        </div>
    )
}

export default ProfileStatusWithHooks