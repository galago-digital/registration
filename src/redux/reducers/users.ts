import {usersActionType} from "../actions/users";

const initialState = {
    users: [],
    isLoaded: false // нигде не используется, хотя идея показать состояние загрузки данных правильная
}
export type initialUsersStateType = typeof initialState

const users = (state:initialUsersStateType = initialState, action: usersActionType) =>{
    if (action.type === 'USERS_SET_USERS'){
        return{
            ...state,
            users: action.payload
        }
    } else if (action.type === 'USERS_ADD_USER'){
        return {
            ...state,
            users:[...state.users, action.payload]

        }
    }
    return  state
}
export default users
