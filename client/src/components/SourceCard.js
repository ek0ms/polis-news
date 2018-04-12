import React from 'react';
import { Link } from 'react-router-dom';

const SourceCard = (props) => (
  <Link to={`/${props.id}`}>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.name}</span>
        <p>{props.description}</p>
      </div>
      <div className="card-action">{props.url}</div>
    </div>
  </Link>
);

export default SourceCard;
