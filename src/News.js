import React from 'react';

class News extends React.Component {
    constuctor() {
        super(props);
        this.state ={
            news:[],
            isLoading: false
        } ;

    }

    componentDidMount() {
        this.state.isLoading = true;

        setTimeout(() => {
            this.setState({news: ["News # 1: All pinguins are doomed", "News # 2: Bees are doing great!"]}, isLoading: false)
        })
    }

    render() {
        const {news, isLoading} = this.state;
        return {isLoading ? "<h2>...Loading" : news.map(item => item)};
    }
 }

 export default News;