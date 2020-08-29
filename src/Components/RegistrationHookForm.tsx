import React from "react";
import {Controller, useForm} from "react-hook-form";
import {UserType} from "../Types/CommonTypes";
import {useDispatch} from "react-redux";
import {addUser} from "../redux/actions/users";
import InputMask from 'react-input-mask'


const RegistrationHookForm = ({items}: { items: Array<UserType> }) => {
    //собираем данные, чтобы задиспатчить их в state
    const {handleSubmit, register, errors, control} = useForm<UserType>()
    //отправляем данные в state
    const dispatch = useDispatch()
    const onSubmit = (values: UserType, e: any) => {
        dispatch(addUser(values))
        e.target.reset()
    }
    return (
        <form name={'regForm'} onSubmit={handleSubmit(onSubmit)}>
            <div className='inputForm'>

                {/* Невидимое поле, чтобы генерировать id юзера. Ради этого тянул данные стейта в форму */}
                <input name={'id'}
                       type={'hidden'}
                       value={items.length + 1}
                       ref={register({
                           required: true
                       })}/>
                <div className='inputBlock'>
                    <label>Имя:
                        <input name={"name"}
                               type={'text'}
                               placeholder={'Введите имя'}
                               ref={register({
                                   required: true
                               })}
                        />
                    </label>
                </div>
                <div className='inputBlock'>
                    <label>Дата рождения:
                        <input name={'date'}
                               type={'date'}
                               ref={register({
                                   required: true
                               })}/>
                    </label>
                </div>
                <div className='inputBlock'>
                    <label>Почта:
                        <input name={'email'}
                               type={'text'}
                               placeholder={'Введите e-mail'}
                               ref={register({
                                   required: true,
                                   pattern: {
                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                       message: "E-mail указан не верно"
                                   }
                               })}
                        />
                    </label>
                    {errors.email && <p className={'error'}>{errors.email.message}</p>}
                </div>
                <div className='inputBlock'>
                    <label>Номер телефона:
                        {/* Не знаю как очистить контроллер при нажатии кнопки. */}
                        <Controller
                            as={InputMask}
                            control={control}
                            mask={'+79999999999'}
                            name={'phone'}
                            type={'tel'}
                            inputMode={'tel'}
                            autoComplete={'cc-number'}
                            defaultValue={''}
                            alwaysShowMask
                            inputRef={register({
                                required: true
                            })}
                        />
                    </label>
                </div>

                <div className='inputBlock'>
                    <label>Дистанция забега:
                        <select name="distance"
                                ref={register({
                                    required: true
                                })}>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                    </label>
                </div>
                <div className='inputBlock'>
                    <label>Взнос:
                        <input type={'text'}
                               name={'payment'}
                               placeholder={'Сумма взноса'}
                               ref={register({
                                   required: true
                               })}/>
                    </label>
                </div>

            </div>
            <div className='buttonBlock'>
                <input type={"submit"} className='sendButton' value={"Отправить"}/>
            </div>
        </form>
    )
}

export default RegistrationHookForm