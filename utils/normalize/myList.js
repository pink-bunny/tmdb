import { normalize, schema } from 'normalizr';

export default (data) => {
  const listSchema = new schema.Entity('list');
  const normalizedData = normalize(data, listSchema);
  const { list } = normalizedData.entities;

  return { list };
};
