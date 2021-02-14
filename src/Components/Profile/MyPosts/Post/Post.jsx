import React from "react";
import "./Post.css"


const Post = () => {
    return (
        <section>
            <div className="posts_block">
                <div className="post_item">
                    <div>
                        <img src="https://pngicon.ru/file/uploads/morkovka-128x128.png" className="post_ava"/>
                    </div>
                    <div>
                        Привет
                    </div>
                    <div className="like_area">like</div>
                </div>
            </div>
        </section>
    )
}

export default Post