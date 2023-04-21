import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // articles = [
  //   {
  //     "source": { "id": "bbc-sport", "name": "BBC Sport" },
  //     "author": null,
  //     "title": "‘We'll find you and we won't let you live’ – a team’s fight to exist",
  //     "description": "Afghanistan's women cricketers have escaped danger, but found only a sporting limbo in exile from their homeland.",
  //     "url": "http://www.bbc.co.uk/sport/cricket/65263457",
  //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/77F2/production/_129360703_afghan1.jpg",
  //     "publishedAt": "2023-04-18T00:07:15.031511Z",
  //     "content": "Afghanistan have been a full member of the International Cricket Council since 2017 and as such are required to field a women's team\r\nNahida Sapan, an all-rounder in Afghanistan women's cricket team,… [+7873 chars]"
  //   },
  //   {
  //     "source": { "id": "bbc-sport", "name": "BBC Sport" },
  //     "author": null,
  //     "title": "Wisden names Stokes as world's leading cricketer",
  //     "description": "England captain Ben Stokes is named Wisden's leading cricketer in the world for the third time in four years.",
  //     "url": "http://www.bbc.co.uk/sport/cricket/65264233",
  //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E37B/production/_129353285_benstokes.jpg",
  //     "publishedAt": "2023-04-17T22:07:17.111303Z",
  //     "content": "Ben Stokes has led England to 10 wins in their last 12 Tests\r\nEngland captain Ben Stokes has been named Wisden's leading cricketer in the world for the third time in four years.\r\nStokes, 31, has tran… [+2397 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  constructor(){
    super();
    console.log('Hello! I am a constructor from news component');
    this.state = {
      articles: [],   //this.articles, it was used when we used above articles but now we are fetching it through api so we dont need this
       loading : false
    }
  }

  async componentDidMount(){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6c87d4fee1b347379c5f4b91b12cde09";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("dayal");
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
 
    return (
      <div className="container my-3">
        <h2>NewsMonkey - top headlines</h2>
      <div className="row">
      {this.state.articles.map((element) => {
        return <div className="col-md-4" key={element.url}>
        <NewsItem  title ={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl ={element.urlToImage} newsUrl={element.url}/>
        </div>
        
      })}

        

        
      </div>
      </div>
    )
  }
}

export default News