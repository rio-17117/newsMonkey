import React, { Component } from 'react'
import './News.css'; // Import CSS file
import Newsitem from './Newsitem';

export default class News extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='head'>Top headlines</h2>
                <div className="row ">
                    <div className="col-4">
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                    </div>
                    <div className="col-4">
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                    </div>

                    <div className="col-4">
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                    </div>
                    <div className="col-4">
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                        <Newsitem title={"TITLE "} description={"BLA BLA BLA BLA BLA BLA"} imgUrl={"https://i.pinimg.com/564x/22/c1/f8/22c1f84dbb5badf9258e408f502ae1e6.jpg"}/>
                    </div>
                </div>
            </div>
        )
    }
}