
let initialState =  {
    friends: [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Коля'},
        {id: 4, name: 'Лина'},
        {id: 5, name: 'Женя'}
    ]
}

const sidebarReducer = (state = initialState,action) => {
    let stateCopy = {...state}
    return stateCopy
}

export default sidebarReducer