import React, { Component } from 'react';
import axios from 'axios';

import ArticleCard from './ArticleCard';

import keys from '../config/dev';

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
  }

  componentDidMount() {
    this.getArticles().then(({ articles, name }) => this.setState({ articles, name }));
  }

  getArticles = async () => {
    const { source } = this.props.match.params;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${keys.news.APIKey}`
    );

    const { articles } = response.data;
    const { name } = articles[0];

    return { articles, name };
  };

  renderArticles() {
    return this.state.articles.map((article) => {
      return (
        <li key={article.title} className="article-card-container">
          <ArticleCard
            author={article.author}
            published={article.publishedAt}
            title={article.title}
            url={article.url}
            img={article.urlToImage}
            description={article.description}
            user={this.props.user}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="articles-page">
        <h1>Latest Headlines From {this.state.name}</h1>
        <ul className="articles-list">{this.renderArticles()}</ul>
      </div>
    );
  }
}

export default ArticlePage;
