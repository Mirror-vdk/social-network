import React from "react";
import s from './preloader.module.css'
import preloader from "../images/831.gif";

let Preloader = (props) => {
    return (
        <img className={s.preloader_img} src={preloader}/>
    )
}

export default Preloader