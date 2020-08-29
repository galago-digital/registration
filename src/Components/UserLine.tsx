import React from "react";
import {UserType} from "../Types/CommonTypes";

const UserLine = (props:UserType) =>{
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.distance} км.</td>
            <td>{props.payment} руб.</td>
        </tr>
    )
}
export default UserLine