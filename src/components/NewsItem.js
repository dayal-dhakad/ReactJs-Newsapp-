import React from "react";

const NewsItem=(props)=> {
 

    // let { title, description, imageUrl, newsUrl, author, date, source} = props; we can use props in both ways 
    return (
      <div className="my-3">
        <div className="card my-2 mx-1" style={{height:"500px"}}>  
         
        <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'80%'}}>
           {props.source} </span>
           <img src={!props.imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : props.imageUrl} className="card-img-top" style={{height:"250px"}} alt="..." />  
                   <div className="card-body">  
            <h5 className="card-title">{props.title}... </h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted"> By {!props.author?"Unknown":props.author} on {new Date(props.date).toGMTString()}  </small></p>
            <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
