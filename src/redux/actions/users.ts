import {UserType} from "../../Types/CommonTypes";

export type usersActionType = ReturnType<typeof setUsers>

export const setUsers = (users: Array<UserType>)=>({
    type: 'USERS_SET_USERS',
    payload: users
})
export const addUser = (user: UserType)=>({
    type: 'USERS_ADD_USER',
    payload: user
})
