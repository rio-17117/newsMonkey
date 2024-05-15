import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './TON.css'
export default class TON extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='head'>Categories of News</h1>
                <p className="info">
                    SINCE WE DON'T HAVE ACCESS TO THE FULL EXTENT OF NEWS AI WE ONLY HAVE A LIMITED CATEGORIES OF NEWS
                </p>
                <ul className="listholder">
                    <li className="list-itemss"><Link className='list-cont' to='/'>sports</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/'>science</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/'>health</Link></li>
                    <li className="list-itemss"><Link className='list-cont' to='/'>entertainment</Link></li>
                </ul>
            </div>
        )
    }
}
