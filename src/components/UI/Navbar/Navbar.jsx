import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from './../../../context/index';

function Navbar(props) {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">

            <div className="navbar__links">
                <Link to="/" className="navbar_item">Main</Link>
                <Link to="/posts" className="navbar_item">Posts</Link>
                <Link to="/about" className="navbar_item">About</Link>
            </div>

            <MyButton onClick={() => logout()}>Выйти</MyButton>
        </div>
    );
}

export default Navbar;