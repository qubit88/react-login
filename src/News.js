import React from "react";

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
    });
  }

  render() {
    let { news, isLoading } = this.state;
    let arr = news.map(item => {
      return <h3>${item}</h3>;
    });
    return <div>{isLoading ? <Loading /> : arr}</div>;
  }
}

function Loading() {
  return <h2>...Loading</h2>;
}

export default News;
