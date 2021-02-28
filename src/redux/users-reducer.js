const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [
        {id: 1, followed: true,photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png' , fullName: 'Лина', status: 'Самурай', location: {city:'VDK', country: 'Russia'}},
       {id: 2, followed: true , photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png' , fullName: 'Женя', status: 'оператор', location: {city:'VDK', country: 'Russia'}},
       {id: 3, followed: false , photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png' , fullName: 'Виталя', status: 'монтажник', location: {city:'VDK', country: 'Russia'}},
       {id: 4, followed: false , photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png' , fullName: 'Коля', status: 'монтажник', location: {city:'VDK', country: 'Russia'}},
       {id: 5, followed: false , photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Choice_toxicity_icon.png' , fullName: 'Серега', status: 'монтажник', location: {city:'VDK', country: 'Russia'}}
    ]
}

const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW:
        return  {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u;
            })
        }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer