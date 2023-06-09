import React, { Component } from "react";

export class Newsitems extends Component {



  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl || "https://images5.alphacoders.com/653/thumb-1920-653698.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
