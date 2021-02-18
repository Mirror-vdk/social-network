import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post post={p.post} id={p.id} likesCount={p.likesCount} /> )

    return (
        <section className={s.main}>
                <div className={s.profile_info}>
                    <div>
                       <h1>Мои посты</h1>
                        <div className={s.Newpost_block}>
                            <textarea placeholder="Введите текст" className={s.post_area}>1</textarea>
                            <div className={s.button_area}>
                                <button className={s.button_post}>Добавить</button>
                            </div>
                            <div className={s.button_area}>
                                <button className={s.button_post}>Удалить</button>
                            </div>
                        </div>
                        <div>
                            {postsElements}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default MyPosts