import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { dropdownLinks, sidebarLinks } from './sidebarData';
import { SidebarToggler, SidebarWrapper } from './SidebarStyled';
import { RxHamburgerMenu } from "react-icons/rx";
import './Sidebar.css';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    // toggling the Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // toggling the Dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    // closing the Sidebar on clicking outside of it.
    window.addEventListener('click', (e) => {
        if (e.target.closest('.section')) {
            setIsSidebarOpen(false);
        }
    });


    // disable the body-scroll when the Sidebar is open.
    const docBody = document.body;
    isSidebarOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');


    return (
        <>
            <section className="section">
                <h1><RxHamburgerMenu />
                </h1>
            </section>

            {/*===== Sidebar =====*/}
            <SidebarWrapper className={isSidebarOpen ? 'show' : ''}>
                <div className="sidebar_head">
                    <h3>newsMonkey</h3>
                </div>
                <div className="sidebar_body">
                    <ul>
                        {/* <li>
                            <div className="dropdown" onClick={toggleDropdown}>
                                <span>All Products</span>
                                <span>{isDropdownOpen ? '-' : '+'}</span>
                            </div>
                            {
                                isDropdownOpen && (
                                    <ul className="dropdown_list">
                                        {
                                            dropdownLinks.map((currValue) => {
                                                const { id, link, path } = currValue;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </li> */}
                        {
                            sidebarLinks.map((currValue) => {
                                const { id, link, path } = currValue;
                                return (
                                    <li key={id}>
                                        <Link to={path}>{link}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </SidebarWrapper>

            {/*===== Sidebar-toggler =====*/}
            <SidebarToggler
                onClick={toggleSidebar}
                title={isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
            >
                <span></span>
                <span></span>
                <span></span>
            </SidebarToggler>
        </>
    );
};

export default Sidebar;