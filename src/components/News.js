import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=65a7efe6da044a45a6cfeb702b185d7e&page=${page}&pageSize=${props.pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=65a7efe6da044a45a6cfeb702b185d7e`;
    setloading(true);
    let { data } = await axios(url);
    props.setProgress(50);
    props.setProgress(100);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setloading(false);

    console.log("Data", data);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsDaily`;
    updateNews();
   // eslint-disable-next-line
  }, []);

  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=65a7efe6da044a45a6cfeb702b185d7e&page=${page+1}&pageSize=${props.pageSize}`;
    const url = `
    https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
      props.category
    }&apiKey=65a7efe6da044a45a6cfeb702b185d7e&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    console.log("parsed data", parsedData);
  };

  return (
    <>
      <h1 style={{ marginTop: "90px" }} className="text-center">
        NewsDaily - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      {articles.length > 0 && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
