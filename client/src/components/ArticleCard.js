import React from 'react';
import axios from 'axios';

const ArticleCard = (props) => {
  const date = new Date(props.published);
  const locale = date.toLocaleString();

  async function fabHandler(article) {
    const existingArticling = await getArticle(article.title);

    if (existingArticling) {
      alert('Article has already been added');
    } else {
      addArticle(article);
      alert('Article added');
    }
  }

  function addArticle(article) {
    const { id } = props.user;
    axios.post(`/api/${id}/articles`, article);
  }

  async function getArticle(articleTitle) {
    const encodedArticleTitle = encodeURI(articleTitle);
    const { id } = props.user;
    const article = await axios.get(`api/${id}/articles/${encodedArticleTitle}`);

    return article.data;
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={props.img} alt={props.description} />
        <span className="card-title">{props.title}</span>
        {props.user ? (
          <a
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => fabHandler(props)}
          >
            <i className="material-icons">add</i>
          </a>
        ) : (
          <noscript />
        )}
      </div>
      <div className="card-content">
        <p>{props.description}</p>
      </div>
      <div className="card-action">
        <a target="_blank" href={props.url}>
          Go to Article
        </a>
        {locale}
      </div>
    </div>
  );
};

export default ArticleCard;
