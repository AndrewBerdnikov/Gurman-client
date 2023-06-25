import React, { useContext, useState } from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts';
import { login, registration } from '../components/http/userApi';
import {observer} from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context)
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(name, email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(MAIN_ROUTE);
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <main className='auth'>
            <div className='container'>
                <div className='auth-form'>
                    <h2 className='auth-form__title'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        {isLogin || <input type='text' className='auth-form__input' placeholder='Username...' value={name} onChange={e => setName(e.target.value)}></input>}
                        <input type='email' placeholder='Email....' className='auth-form__input' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <input type='password' placeholder='Password....' className='auth-form__input' value={password} onChange={e => setPassword(e.target.value)}></input>
                        <button className='auth-form__button white-button' onClick={click}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                        {
                            isLogin ? 
                            <p className='auth-form__link'><NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink></p>
                            :
                            <p className='auth-form__link'><NavLink to={LOGIN_ROUTE}>Уже есть аккаун?</NavLink></p>
                        }
                        
                    </form>
                </div>
            </div>
        </main>
    );
});

export default Auth;
