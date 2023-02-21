import React from 'react'
import './article.css'
const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog_container_article">
    <div className="gpt3__blog_container_article_image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog_container_article_content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article