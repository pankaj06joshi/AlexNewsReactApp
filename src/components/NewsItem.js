import React from "react";

function NewsItem(props) {
  let { imgUrl, title, des, newsUrl, clean_url, published_date } = props;
  return (
    <div>
      <div className="card">
        <img
          src={imgUrl ? imgUrl : "https://source.unsplash.com/random"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {clean_url}
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
          <p class="card-text my-3"><small class="text-muted">Published At : {published_date}</small></p>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
