import React from "react";
import s from "./Post.module.css"


const Post = () => {
    return (
        <section>
            <div className={s.posts_block}>
                <div className={s.post_item}>
                    <div>
                        <img src="https://pngicon.ru/file/uploads/morkovka-128x128.png" className={s.post_ava}/>
                    </div>
                    <div>
                        Привет
                    </div>
                    <div className={s.like_area}>like</div>
                </div>
            </div>
        </section>
    )
}

export default Post