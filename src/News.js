import React from "react";
import "./News.css";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        news: [
          "News # 1: All pinguins are doomed",
          "News # 2: Bees are doing great!"
        ],
        isLoading: false
      });
    }, 2000);
  }

  render() {
    let { news, isLoading } = this.state;
    let arr = news.map(item => {
      return <div>{item}</div>;
    });
    return (
      <div className="news">
        <h2>News</h2>
        {isLoading ? <Loading /> : arr}
      </div>
    );
  }
}

function Loading() {
  return <h2>...Loading</h2>;
}

export default News;
