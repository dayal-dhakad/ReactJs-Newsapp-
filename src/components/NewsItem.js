import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card my-4 mx-2" style={{height:"500px"}}>  
         
        <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'80%'}}>
           {source} </span>
          <img src= {imageUrl} className="card-img-top" style={{height:"250px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}  </small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
