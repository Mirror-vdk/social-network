import React from "react";
import {rerenderEntireTree} from "../render";


let state = {
    profilePage:{
        posts: [
            {id: 1, post: 'Привет',likesCount: 25},
            {id: 2, post: 'И вам добрый день',likesCount: 1},
            {id: 3, post: 'Как ваши дела?',likesCount: 5},
            {id: 4, post: 'Отлично',likesCount: 211},
            {id: 5, post: 'Учишь React?',likesCount: 255},
        ],
    },
    dialogsPage: {
        messages:[
            {id: 1, message: 'Привет'},
            {id: 2, message: 'И вам добрый день'},
            {id: 3, message: 'Как ваши дела?'},
            {id: 4, message: 'Отлично'},
            {id: 4, message: 'Учишь React?'},
        ],
        dialogs: [
            {id: 1, name: 'Вася'},
            {id: 2, name: 'Петя'},
            {id: 3, name: 'Коля'},
            {id: 4, name: 'Лина'},
            {id: 5, name: 'Женя'}
        ]
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
}


 export let addPost = (postMessage) => {
    let newPost = {
        id: 6,
        post: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
     rerenderEntireTree(state)
}

export default state
