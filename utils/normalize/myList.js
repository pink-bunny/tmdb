import { normalize, schema } from 'normalizr';

export default (data) => {
  const movie = new schema.Entity('movies');
  const listSchema = new schema.Entity('lists', {
    items: [movie]
  });
  const normalizedData = normalize(data, listSchema);

  return normalizedData.entities;
};
