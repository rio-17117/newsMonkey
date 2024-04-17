import React, { Component } from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import './Newsitem.css'; // Import CSS file

export default class Newsitem extends Component {
    render() {
        let {title, description, imgUrl} = this.props
        return (
            <div className='container'>
                <div className="card">
                    <img className="card-img-top" src={imgUrl} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Check out <LuArrowUpRight /></a>
                    </div>
                </div>
            </div>
        );
    }
}
