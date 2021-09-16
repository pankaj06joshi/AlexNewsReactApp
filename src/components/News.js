import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [pageSize, setPageSize] = useState();
  const [loading, setLoading] = useState(false)

  const handlePrev = () => {
    setPage(page - 1);
    
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchNewData = async () => {
      try {
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&topic=${props.topic}&page_size=21&page=${page}`;
        setLoading(true)
        let data = await fetch(url, {
          headers: {
            "x-api-key": "8waUum4R8yuVTfw-YjZyz5JLeM_xfquD9ozWm92iObM",
          },
        });

        let showData = await data.json();
        // console.log(showData);
        setArticles(showData.articles);
        setTotalPage(showData.total_pages);
        setPageSize(showData.page_size);
        setLoading(false)
      } catch (error) {
        console.log("Error is :", error);
      }
    };
    fetchNewData();
  }, [page,props.topic]);

  return (
    <div className="container my-3">
     {loading && <Spinner/>}
      <h1 className="my-4 text-center">Today's Top Headlines</h1>
      <div className="row">
        {!loading && articles.map((element) => {
          return (
            <div key={element.link} className="col-md-4">
              <NewsItem
                imgUrl={element.media}
                title={element.title}
                des={element.excerpt}
                newsUrl={element.link}
                clean_url={element.clean_url}
                published_date={element.published_date}
              />
            </div>
          );
        })}
      </div>
      <div className="row my-3">
        <div className="col-12 d-flex justify-content-between">
          <button
            disabled={page <= 1}
            className="btn btn-dark"
            onClick={handlePrev}
          >
            
            &larr; Previous
          </button>
          <button
            disabled={page > Math.floor(totalPage/pageSize)}
            className="btn btn-dark"
            onClick={handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
