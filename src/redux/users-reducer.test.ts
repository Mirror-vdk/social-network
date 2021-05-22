
import usersReducer, {actions, InitialState} from "./users-reducer";

let state : InitialState = {
    users: [
        {id:0, name: 'Test1', followed: false,
            photos: {small:null, large:null}, status: 'Тест1'},
        {id:1, name: 'Test2', followed: false,
            photos: {small:null, large:null}, status: 'Тест2'},
        {id:2, name: 'Test3', followed: true,
            photos: {small:null, large:null}, status: 'Тест3'},
        {id:3, name: 'Test4', followed: false,
            photos: {small:null, large:null}, status: 'Тест4'},
        {id:4, name: 'Test5', followed: true,
            photos: {small:null, large:null}, status: 'Тест5'},
    ] ,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 5,
    isFetching: false,
    followingInProgress: []
}

beforeEach(() => {
    state = {
        users: [
            {id:0, name: 'Test1', followed: false,
                photos: {small:null, large:null}, status: 'Тест1'},
            {id:1, name: 'Test2', followed: false,
                photos: {small:null, large:null}, status: 'Тест2'},
            {id:2, name: 'Test3', followed: true,
                photos: {small:null, large:null}, status: 'Тест3'},
            {id:3, name: 'Test4', followed: false,
                photos: {small:null, large:null}, status: 'Тест4'},
            {id:4, name: 'Test5', followed: true,
                photos: {small:null, large:null}, status: 'Тест5'},
        ] ,
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 5,
        isFetching: false,
        followingInProgress: []
    }
})



test("users   followed", ()=> {
    const newState = usersReducer(state, actions.followSuccess(1) )
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
}) // follow test ok
test("users dont  followed", ()=> {
    const newState = usersReducer(state, actions.unfollowSuccess(4) )
    expect(newState.users[4].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
}) //unfollow test ok

