import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <Menu right isOpen={ false } className='menu-sidebar'>
            <ul className="list-holder">
                <li className="list-items"><Link className="link" to={'/'}> Home </Link></li>
                <li className="list-items"><Link className="link" to={'/'}> Types of News </Link></li>
                <li className="list-items"><Link className="link" to={'/'}> Business </Link></li>
                <li className="list-items"><Link className="link" to={'/'}> Technology </Link></li>
                <li className="list-items"><Link className="link" to={'/'}> About me & contacts </Link></li>
            </ul>
        </Menu>
    );
};

export default Sidebar;
