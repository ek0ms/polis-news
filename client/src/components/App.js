import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import SourcePage from './SourcePage';
import ArticlePage from './ArticlePage';
import SavedArticlePage from './SavedArticlePage';

import keys from '../config/dev';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null, sources: [] };
  }

  componentDidMount() {
    this.updateState();
  }

  getSources = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/sources?language=en&apiKey=${keys.news.APIKey}`
    );

    return response.data.sources;
  };

  fetchUser = async () => {
    const response = await axios.get('/profile/current_user');

    return response.data || false;
  };

  updateState = async () => {
    const user = await this.fetchUser();
    const sources = await this.getSources();

    this.setState({ user, sources });
  };

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <SourcePage {...routeProps} {...this.state} />}
            />
            <Route
              exact
              path="/profile/articles"
              render={(routeProps) => <SavedArticlePage {...routeProps} user={this.state.user} />}
            />
            <Route
              path="/:source"
              render={(routeProps) => <ArticlePage {...routeProps} user={this.state.user} />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
