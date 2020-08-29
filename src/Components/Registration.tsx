import React from "react";
import RegistrationHookForm from "./RegistrationHookForm";
import {UserType} from "../Types/CommonTypes";

const Registration = ({items}: { items: Array<UserType> }) =>{
    return(
        <div className='registrationFrom'>
            <h2>Регистрация участников</h2>
            <RegistrationHookForm items={items}/>
        </div>
    )
}



export default Registration