import { normalize, schema } from 'normalizr';

export default (data) => {
  const list = new schema.Entity('lists');
  const listsSchema = { results: [list] };
  const normalizedData = normalize(data, listsSchema);
  const { lists } = normalizedData.entities;
  const ids = normalizedData.result.results;

  return { lists, ids };
};
