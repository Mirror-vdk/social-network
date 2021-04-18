import React, {useEffect, useState} from "react";
debugger
const AboutMeWithHooks = (props) => {

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
    const onAboutChange = (e) => {
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