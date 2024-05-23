import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Newsitem from '../News/Newsitem';
import './TON.css'
import News from '../News/News';
// import Newsitem from '../News/Newsitem';
export default class TON extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='head'>Categories of News</h1>
                <p className="info">
                    SINCE WE DON'T HAVE ACCESS TO THE FULL EXTENT OF NEWS API WE ONLY HAVE A LIMITED CATEGORIES OF NEWS
                </p>
                <ul className="listholder">
                    <li className="list-itemss"><Link className='list-cont' to='/sports'>sports</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/science'>science</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/health'>health</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/entertainment'>entertainment</Link></li>
                </ul>
            </div>
        )
    }
}
