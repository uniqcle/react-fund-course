import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/" className="navbar_item">Main</Link>
                <Link to="/posts" className="navbar_item">Posts</Link>
                <Link to="/about" className="navbar_item">About</Link>
            </div>
        </div>
    );
}

export default Navbar;