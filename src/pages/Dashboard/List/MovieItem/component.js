import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const Movie = ({
  actions,
  title,
  overview,
  poster
}) => (
  <Card
    hoverable
    cover={(
      <img
        alt={title}
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`}
      />
    )}
    className="top-margin"
    actions={actions}
  >
    <Card.Meta
      title={title}
      description={overview}
    />
  </Card>
);

Movie.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

Movie.defaultProps = {
  actions: []
};

export default Movie;
