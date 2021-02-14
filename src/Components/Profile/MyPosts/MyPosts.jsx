import React from "react";
import "./MyPosts.css"
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <section className="main">
                <div className="profile_info">
                    <div>
                       <h1>Мои посты</h1>
                        <div className="Newpost_block">
                            <textarea placeholder="Введите текст">1</textarea>
                            <div className="button_area">
                                <button className="button_post">Добавить</button>
                            </div>
                            <div className="button_area">
                                <button className="button_post">Удалить</button>
                            </div>
                        </div>
                        <div>
                            <Post/>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default MyPosts