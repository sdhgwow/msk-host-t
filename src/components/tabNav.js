import React from 'react';
import { Link } from 'react-router-dom';
import './tabNav.css';
import logo from './logo.svg';

const TabNav = () => {
    return (
        <div className="tab-nav">
            <div className="container">
                <Link to="/"><img src={logo} alt="Логотип" className="logo" /></Link>
                <div className="nav-links">
                    <Link to="/purchase">Покупкa</Link>
                    <Link to="/services">Мои услуги</Link>
                </div>
            </div>
        </div>
    );
};

export default TabNav;
