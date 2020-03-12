import * as types from '../types';
import {
  mergeMoviesList,
  mergeListsList
} from '../actions';

describe('Data actions.', () => {
  it('Merge movies list', () => {
    const movies = { 1: {}, 2: {}, 3: {} };
    const expectedAction = {
      type: types.MERGE_MOVIES_LIST,
      movies
    };
    expect(mergeMoviesList(movies)).toEqual(expectedAction);
  });

  it('Merge lists list', () => {
    const lists = { 1: {}, 2: {}, 3: {} };
    const expectedAction = {
      type: types.MERGE_LISTS_LIST,
      lists
    };
    expect(mergeListsList(lists)).toEqual(expectedAction);
  });
});
