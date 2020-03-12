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
}) => {
  const imagePath = poster ? `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster})` : 'none';

  return (
    <Card
      className="movie-item top-margin"
      cover={(
        <Link
          className="movie-item__img"
          to={`movie/${id}`}
          style={{ backgroundImage: imagePath }}
        />
      )}
      actions={actions}
    >
      <Card.Meta
        title={title}
        description={overview}
      />
    </Card>
  );
};

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
