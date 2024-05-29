import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './TON.css'

export default class TON extends Component {
    render() {
        return (
            <div className="container">
                <h1 className='head'>Categories of News</h1>
                <p className="info">
                    SINCE WE DON'T HAVE ACCESS TO THE FULL EXTENT OF NEWS API WE ONLY HAVE A LIMITED CATEGORIES OF NEWS
                </p>
                <ul className="listholder">
                    <Link to='/sports'> <li className="list-itemss"><Link className='list-cont' to='/sports'>sports</Link></li></Link>
                    <Link to='/science'> <li className="list-itemss"><Link className='list-cont' to='/science'>science</Link></li></Link>
                    <Link to='/health'> <li className="list-itemss"><Link className='list-cont' to='/health'>health</Link></li></Link>
                    <Link to='/entertainment'> <li className="list-itemss"><Link className='list-cont' to='/entertainment'>entertainment</Link></li></Link>
                </ul>
            </div>
        )
    }
}
