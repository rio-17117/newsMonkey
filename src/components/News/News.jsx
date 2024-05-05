import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import './News.css'; // Import CSS file
import Newsitem from './Newsitem';
import ReactLoading from "react-loading";

export default class News extends Component {
    static defaultProps ={
        country:'us',
        pageSize:9,
        category:'general'
    }
    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            error: null,
            currentPage: 1,
        };
    }

    async componentDidMount() {
        this.fetchArticles();
    }

    async fetchArticles() {
        const { currentPage } = this.state;
        try {
            // const apiKey = `37b7ebc5906844b6b46fd27d9f2c8449`;
            const apiKey = process.env.API_KEY;
            const apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${apiKey}&page=${currentPage}&pageSize=${this.props.pageSize}`;
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

    handlePreviousPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage - 1,
            loading: true,
        }), () => {
            this.fetchArticles();
        });
    };

    handleNextPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
            loading: true,
        }), () => {
            this.fetchArticles();
        });
    };

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
                    {articles.map((element) => (
                        <div className="col-4" key={element.url}>
                            <Newsitem
                                title={element.title ? element.title : "CANNOT LOAD TITLE OF THIS NEWS"}
                                description={element.description ? element.description : "CANNOT LOAD DESCRIPTION OF THIS NEWS"}
                                imgUrl={element.urlToImage ? element.urlToImage : "https://discussions.apple.com/content/attachment/660042040"}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
                <div className="prev-next">
                <button type="button" class="btn btn-dark" onClick={this.handlePreviousPage}>previous</button>
                <button disabled={this.state.currentPage.page<=1} type="button" class="btn btn-dark" onClick={this.handleNextPage}>next</button>
                </div>
            </div>
        );
    }
}
