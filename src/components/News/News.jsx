import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './News.css';
import Newsitem from './Newsitem';
import ReactLoading from "react-loading";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 1,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            error: null,
            currentPage: 1,
            totalResults: 0
        };
    }

    async componentDidMount() {
        this.fetchArticles();
    }

    async fetchArticles() {
        const { currentPage } = this.state;
        const { country, category, pageSize } = this.props;
        try {
            const apiUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/${country}.json?page=${currentPage}&pageSize=${pageSize}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                this.setState({ error: 'Response was not OK! Check your internet connection.', loading: false });
                return;
            }
            const data = await response.json();
            this.setState({ articles: data.articles, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    }

    fetchMoreData = () => {
        this.state({ pageSize: this.state.pageSize + 1 })
        this.fetchArticles()

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
            return (
                <div>
                    <img src="./Error.svg" alt='Response was not OK! Check your internet connection.' />
                </div>
            );
        }

        return (
            <div className='container'>
                <h2 className='head'>Top headlines</h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.state.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ReactLoading type="bars" color="#37d6fa" height={100} width={50} />
                        </div>
                    }

                >



                    <div className="rowss">
                        {articles.map((element) => (
                            <div className="col-4" key={element.url}>
                                <Newsitem
                                    title={element.title ? element.title : "CANNOT LOAD TITLE OF THIS NEWS"}
                                    description={element.description ? element.description : "CANNOT LOAD DESCRIPTION OF THIS NEWS"}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://discussions.apple.com/content/attachment/660042040"}
                                    author={element.author ? element.author : "UNKNOWN"}
                                    time={element.publishedAt ? element.publishedAt : "UNKNOWN"}
                                    newsUrl={element.url}
                                />
                            </div>

                        ))}
                    </div>

                </InfiniteScroll>
            </div >
        );
    }
}
