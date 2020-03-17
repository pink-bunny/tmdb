import toggleToFavoritesLogic from '../toggleToFavorite';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { TOGGLE_TO_FAVORITES } from '../../types';
import { getSessionId } from '../../../session/selectors';
import {
  fetchFavorites,
  toggleToFavoriteSuccess
} from '../../actions';
import {
  favoritesTotalItems,
  favoritesCurrentPage
} from '../../selectors';
import refetchListIfNeeded from '../../../../utils/refetchListIfNeeded';

jest.mock('../../../../utils/refetchListIfNeeded', () => jest.fn());
jest.mock('../../selectors', () => ({
  favoritesTotalItems: jest.fn(() => 22),
  favoritesCurrentPage: jest.fn(() => 2)
}));
jest.mock('../../actions', () => ({
  fetchFavorites: jest.fn(),
  toggleToFavoriteSuccess: jest.fn()
}));
jest.mock('../../../session/selectors', () => ({
  getSessionId: jest.fn(() => '1q2w3e4r5t')
}));

describe('toggleToFavorites logic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const state = getState();
  const sessionId = getSessionId(state);
  const action = {
    type: TOGGLE_TO_FAVORITES,
    id: 1,
    favorite: true,
    needRefetchList: false
  };
  const { favorite, id, needRefetchList } = action;
  const httpClient = mockHttpClient({ method: 'post', request: {} });
  toggleToFavoritesLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(toggleToFavoritesLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestUrl = `/account/{account_id}/favorite?session_id=${sessionId}`;
    const requestBody = {
      media_type: 'movie', /* eslint-disable-line camelcase */
      media_id: id, /* eslint-disable-line camelcase */
      favorite
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestUrl, requestBody);
  });

  describe('success.', () => {
    it('Dispatch toggleToFavoriteSuccess() with arguments', () => {
      expect(toggleToFavoriteSuccess).toHaveBeenCalledWith(id, favorite);
    });

    it('Called refetchListIfNeeded() with arguments', () => {
      const args = {
        dispatch,
        refetchFunc: fetchFavorites,
        needRefetch: needRefetchList,
        totalItems: favoritesTotalItems(state),
        currentPage: favoritesCurrentPage(state)
      };
      expect(refetchListIfNeeded).toHaveBeenCalledWith(args);
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
