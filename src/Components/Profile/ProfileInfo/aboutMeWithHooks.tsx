import React, {ChangeEvent, FC, useEffect, useState} from "react";
debugger

type PropsType = {
    aboutMe: string

}

const AboutMeWithHooks: FC<PropsType> = (props) => {

    let [editAbout, setEditAbout] = useState(false)
    let [aboutMe, setAboutMe] = useState(props.aboutMe)
    useEffect(() => {
        setAboutMe(props.aboutMe)
    }, [props.aboutMe])
    const activateEditMode = () => {
        setEditAbout(true)
    }
    const deactivateEditMode = () => {
        setEditAbout(false)
    }
    const onAboutChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAboutMe(e.currentTarget.value)
    }
    debugger
    return (
        <div>
            {!editAbout &&
            <div>
                <div onDoubleClick={activateEditMode}>{props.aboutMe || "Расскажите о себе"}</div>
            </div>}
            {editAbout &&
                <textarea onBlur={deactivateEditMode} onChange={onAboutChange} autoFocus={true} value={aboutMe}/>
            }
        </div>
        )
}

export default AboutMeWithHooks