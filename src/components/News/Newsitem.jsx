import React, { Component } from 'react';
import { LuArrowUpRight } from "react-icons/lu";
import './Newsitem.css'; 

export default class Newsitem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl, author, time} = this.props
        return (
            <div className='container'>
                <div className="card">
                    <img className="card-img-top" src={imgUrl} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>

                        <p className="card-text"><small className='text-details'>By {author} on {new Date(time).toGMTString()} </small></p>
                        
                        <a href={newsUrl} className="btn btn-primary" target='_blank'>Check out <LuArrowUpRight /></a>
                    </div>
                </div>
            </div>
        );
    }
}
