import React, { Component } from 'react';
import SourceCard from './SourceCard';

class SourcePage extends Component {
  renderSources() {
    return this.props.sources.map((source) => {
      return (
        <li key={source.name} className="source-card-container">
          <SourceCard
            name={source.name}
            description={source.description}
            url={source.url}
            id={source.id}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="sources-page">
        <h1>News Sources with English News</h1>
        <ul className="sources-list">{this.renderSources()}</ul>
      </div>
    );
  }
}

export default SourcePage;
