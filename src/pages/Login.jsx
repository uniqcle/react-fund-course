import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

function Login(props) {
    return (
        <div>
            <h2>Страница логина</h2>
            <form>
                <MyInput type="text" placeholder='Введите логин' />
                <MyInput type="text" placeholder='Введите пароль' />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
}

export default Login;