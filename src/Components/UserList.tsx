import React from "react";
import UserLine from "./UserLine";
import {UserType} from "../Types/CommonTypes";
import Fuse from 'fuse.js'

const UserList = ({items}: { items: Array<UserType> }) => {
    //Модуль поиска
    const [query, setQuery] = React.useState('')
    const fuse = new Fuse(items, {
        keys: [
            'id',
            'payment',
            'distance',
            'name'
        ]
    })
    
    const results = fuse.search(query)
    const userSearchResults = query ? results.map(result => result.item) : items

    const handleOnSearch = ({currentTarget = {}}) => {
        // впервые полюзуюсь fuse, не смог подобрать type у value   
            
        // ИМХО fuse тут избыточен, а результат его работы не однозначен
        // поиск "кууу" - в результате Куклина Мария Ивановна, Мокрушина Галина Юрьевна
        // 500 - все три дефолтных участника
        // @ts-ignore
        const {value} = currentTarget
        setQuery(value)
    }

    return (
        <div>
            <div className='inputBlock'>
                <label> Фильтр по значению: <input type={'search'} value={query} onChange={handleOnSearch} placeholder={'Имя, номер, дистанция или сумма'}/></label>
            </div>
            <div className='tableWrapper'>
                <div className='overflow'>
                    <table>
                        <thead>
                        <tr>
                            <th>Номер</th>
                            <th>ФИО</th>
                            <th>Дата рождения</th>
                            <th>Почта</th>
                            <th>Телефон</th>
                            <th>Дистанция</th>
                            <th>Оплата</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items &&
                        userSearchResults.map((item, index) => <UserLine key={index} {...item}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList