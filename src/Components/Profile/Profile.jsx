import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css"



const Profile =() => {
    return (
        <div className="main">
            <div className="profile_ava">
                <img src="https://pngicon.ru/file/uploads/1303507907_User_Green-128x128.png" className="user_avatar"/>
                <div>Имя пользователя</div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile