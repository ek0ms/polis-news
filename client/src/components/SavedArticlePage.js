import React, { Component } from 'react';
import axios from 'axios';

import ArticleCard from './ArticleCard';

class SavedArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = { articles: [] };
  }

  componentDidMount() {
    this.getSavedArticles().then((articles) => this.setState({ articles }));
  }

  getSavedArticles = async () => {
    const { id } = this.props.location.user;
    const response = await axios.get(`/api/${id}/articles`);

    return response.data;
  };

  renderArticles() {
    return this.state.articles.map((article) => {
      return (
        <li key={article.title} className="article-card-container">
          <ArticleCard
            author={article.author}
            published={article.published}
            title={article.title}
            url={article.url}
            img={article.img}
            description={article.description}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="articles-page">
        <h1>Saved Articles</h1>
        <ul className="articles-list">{this.renderArticles()}</ul>
      </div>
    );
  }
}

export default SavedArticlePage;
