import React from 'react';

import Registration from "./Components/Registration";
import UserList from "./Components/UserList";
import {Route} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "./redux/actions/users";
import {initialUsersStateType} from "./redux/reducers/users";


function App() {
    //заполняем state
    const dispatch = useDispatch()
    const state = useSelector(({users}:{users: initialUsersStateType})=> {
        return{
            users: users.users
        }
    })
    React.useEffect(() => {
        axios.get('http://localhost:3000/users.json') // указать порт, на котором запущено приложение
            .then(({data}) => {
                dispatch(setUsers(data.users))
            })
    }, [dispatch])

  return (
    <div className='wrapper'>
        <div className='content'>
          <Route render={()=> <Registration items = {state.users} />} />
          <Route exact path='/' render={() => <UserList items={state.users}/>}/>
        </div>
    </div>
  );
}

export default App;
