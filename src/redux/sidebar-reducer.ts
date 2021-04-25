
type FriendsType = {
    id: number,
    name: string
}

export type  initialStateType = typeof initialState

let initialState =  {
    friends: [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 3, name: 'Коля'},
        {id: 4, name: 'Лина'},
        {id: 5, name: 'Женя'}
    ] as Array<FriendsType>
}

const sidebarReducer = (state = initialState,action: any) => {
    let stateCopy = {...state}
    return stateCopy
}

export default sidebarReducer