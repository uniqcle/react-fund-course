import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

function Login(props) {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const login = e => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h2>Страница логина</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Введите логин' />
                <MyInput type="text" placeholder='Введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
}

export default Login;