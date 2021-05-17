import React, {FC} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddNewPostForm, {AddPostFormValuesType} from "./Post/AddNewPostForm";
import {PostsType} from "../../../types/types";

export type MapPropsType = {
    posts : Array<PostsType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts: FC<MapPropsType & DispatchPropsType> = props => {

    let postsElements = props.posts.map(p => <Post post={p.post} id={p.id} key={p.id} likesCount={p.likesCount}/>)

    let onAddPost = (values:AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (<section className={s.main}>
    <div className={s.profile_info}>
        <div>
            <h1>Мои посты</h1>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    </div>
</section>)

}

const MyPostsMemorized = React.memo(MyPosts)


export default MyPostsMemorized