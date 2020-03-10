import { normalize, schema } from 'normalizr';

const normalizedMovies = (data) => {
  const movie = new schema.Entity('movies');
  const moviesSchema = { results: [movie] };
  const normalizedData = normalize(data, moviesSchema);
  const { movies } = normalizedData.entities;
  const ids = normalizedData.result.results;
  const totalItems = normalizedData.result.total_results;

  return { movies, ids, totalItems };
};

export default normalizedMovies;
