import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Sidebar from './Sidebar';


const NavLinks = () => {
    return (
        <div className="containerr">
            <h3 className='title'>Newsmonkey</h3>

            <ul className="list-holder" >
                <li className="list-items" ><Link className="link" to={'/home'}> Home </Link></li>
                <li className="list-items" ><Link className="link" to={'/types of news'}> Types of News </Link></li>
                <li className="list-items" ><Link className="link" to={'/business'}> Business </Link></li>
                <li className="list-items" ><Link className="link" to={'/technology'}> Technology </Link></li>
                <li className="list-items" ><Link className="link" to={'/entertainment'}> Entertainment</Link></li>
                {/* <li className="list-items" ><Link className="link" to={'/about me & contacts'}> About me & contacts </Link></li> */}
            </ul>
            <div></div>
            <div className='ham-container'><Sidebar /></div>
        </div>
    );
}

export default NavLinks;