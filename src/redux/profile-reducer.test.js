import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    posts: [
        {id: 1, post: 'Привет', likesCount: 25},
        {id: 2, post: 'И вам добрый день', likesCount: 1},
        {id: 3, post: 'Как ваши дела?', likesCount: 5},
        {id: 4, post: 'Отлично', likesCount: 211},
        {id: 5, post: 'Учишь React?', likesCount: 255},
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("Тест")
    let newState = profileReducer(state,action)
     expect(newState.posts.length).toBe(6)
});
test('message of new post should be correct', () => {
    let action = addPostActionCreator("Тест")
    let newState = profileReducer(state,action)
     expect(newState.posts[4].post).toBe("Учишь React?")
});
test('after deleting length of messages should be decrement ', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)
     expect(newState.posts.length).toBe(4)
});

