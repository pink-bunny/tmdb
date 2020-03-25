import { normalize, schema } from 'normalizr';

export default (data) => {
  const movie = new schema.Entity('listMovies');
  const listSchema = new schema.Entity('listInfo', {
    items: [movie]
  });
  const normalizedData = normalize(data, listSchema);
  const { listInfo } = normalizedData.entities;
  const listId = normalizedData.result;
  const listMoviesIds = normalizedData.entities.listInfo[listId].items;
  const { listMovies } = normalizedData.entities;

  return { listInfo, listMoviesIds, listMovies };
};
