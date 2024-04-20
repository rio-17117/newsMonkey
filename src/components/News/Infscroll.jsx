import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

class Infscroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hasMore: true,
      index: 2
    };
  }

  componentDidMount() {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=10&limit=12")
      .then((res) => this.setState({ items: res.data }))
      .catch((err) => console.log(err));
  }

  fetchMoreData = () => {
    const { index } = this.state;
    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        this.setState((prevState) => ({
          items: [...prevState.items, ...res.data],
          hasMore: res.data.length > 0,
          index: prevState.index + 1
        }));
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { items, hasMore } = this.state;

    return (
      <InfiniteScroll
        dataLength={items.length}
        next={this.fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className='container'>
          <div className='row'>
            {items &&
              items.map((item) => <ProductCard data={item} key={item.id} />)}
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

export default Infscroll;
