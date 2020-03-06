import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const Movie = ({
  actions,
  title,
  overview,
  poster,
  id
}) => (
  <Link
    className="top-margin"
    style={{ display: 'block' }}
    to={`movie/${id}`}
  >
    <Card
      hoverable
      cover={(
        poster ? (
          <img
            alt={title}
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster}`}
          />
        ) : (
          null
        )
      )}
      actions={actions}
    >
      <Card.Meta
        title={title}
        description={overview}
      />
    </Card>
  </Link>
);

Movie.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
  id: PropTypes.number.isRequired
};

Movie.defaultProps = {
  actions: [],
  poster: ''
};

export default Movie;
