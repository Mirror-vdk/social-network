import React from "react";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Привет', likesCount: 25},
                {id: 2, post: 'И вам добрый день', likesCount: 1},
                {id: 3, post: 'Как ваши дела?', likesCount: 5},
                {id: 4, post: 'Отлично', likesCount: 211},
                {id: 5, post: 'Учишь React?', likesCount: 255},
            ],
            newPostText: 'Test1222'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'И вам добрый день'},
                {id: 3, message: 'Как ваши дела?'},
                {id: 4, message: 'Отлично'},
                {id: 5, message: 'Учишь React?'},
            ],
            dialogs: [
                {id: 1, name: 'Вася'},
                {id: 2, name: 'Петя'},
                {id: 3, name: 'Коля'},
                {id: 4, name: 'Лина'},
                {id: 5, name: 'Женя'}
            ],
            newMessageText: '5555'
        },
        navbarPage: {
            friends: [
                {id: 1, name: 'Вася'},
                {id: 2, name: 'Петя'},
                {id: 3, name: 'Коля'},
                {id: 4, name: 'Лина'},
                {id: 5, name: 'Женя'}
            ]
        }
    },
    getState() {
        return (
            this._state
        )

    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        let newPost = {
            id: 6,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ' '
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.navbarPage = sidebarReducer(this._state.navbarPage,action)
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store
