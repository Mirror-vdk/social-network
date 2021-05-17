import React, {FC} from "react";
import s from './preloader.module.css'
import preloader from "../images/831.gif";

let Preloader: FC = () => {
    return (
        <img className={s.preloader_img} src={preloader}/>
    )
}

export default Preloader