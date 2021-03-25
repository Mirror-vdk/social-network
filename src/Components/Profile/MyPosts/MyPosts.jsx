import React, {Component} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../ utils/validators/validators";
import {Textarea} from "../../../assets/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post post={p.post} id={p.id} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (<section className={s.main}>
    <div className={s.profile_info}>
        <div>
            <h1>Мои посты</h1>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    </div>
</section>)
})

function AddNewPostForm(props) {
    return (
        <form className={s.Newpost_block} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Введите текст"
                   validate={[required, maxLength10]}/>
            <div className={s.button_area}>
                <button className={s.button_post}>Добавить</button>
            </div>
            <div className={s.button_area}>
                <button className={s.button_post}>Удалить</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts