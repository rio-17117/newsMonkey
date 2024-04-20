import React, { Component } from 'react'
import './News.css'; // Import CSS file
import Newsitem from './Newsitem';
import ReactLoading from "react-loading";

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: true,
            error: null
        }
    }
    async componentDidMount() {
        try {
            const apiKey = '37b7ebc5906844b6b46fd27d9f2c8449';
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.setState({ articles: data.articles, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }
    render() {
        const { articles, loading, error } = this.state;

        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
                </div>
            );
        }

        if (error) {
            return <div>Error: {error}</div>;
        }
        return (
            <div className='container'>
                <h2 className='head'>Top headlines</h2>
                <div className="row">
                    {
                        this.state.articles.flat().map((element) => {
                            return <>
                                <div className="col-4" >
                                    <Newsitem key={element.url} title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url}/>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        )
    }
}