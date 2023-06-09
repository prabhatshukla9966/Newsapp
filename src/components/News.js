import React, { Component } from "react";
import Newsitems from "./Newsitems";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("i am called");
    this.state = { articles: []};
    // loading : false
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7dc87e4da18547d693db3a23d98a0287"
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata)
    this.setState({articles : parseddata.articles})

  }

  render() {
    return (
      <div className=" container my-3">
        <h2>News Headlines</h2>
        <div className=" row">
          {this.state.articles.map((element) => {
            return        <div className="col-md-4" key={element.url}>
                 <Newsitems
                 title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
