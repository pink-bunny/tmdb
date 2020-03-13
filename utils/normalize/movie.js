import { normalize, schema } from 'normalizr';

const normalizeMovie = (data) => {
  const movieInfoSchema = new schema.Entity('movie');
  const normalizedInfo = normalize(data, movieInfoSchema);
  const { movie } = normalizedInfo.entities;

  return { movie };
};

export default normalizeMovie;
