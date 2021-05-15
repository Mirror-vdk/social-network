import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U}? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any[])=>any}>= ReturnType<PropertiesTypes<T>>
export type CommonThunkType <A extends Action = Action,R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))



export default store