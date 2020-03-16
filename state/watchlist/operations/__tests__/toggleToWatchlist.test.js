import toggleToWatchlistLogic from '../toggleToWatchlist';
import mockHttpClient from '../../../../utils/testsHelpers/mockHttpClient';
import { TOGGLE_TO_WATCHLIST } from '../../types';
import { getSessionId } from '../../../session/selectors';
import {
  watchlistTotalItems,
  watchlistCurrentPage
} from '../../selectors';
import {
  fetchWatchlist,
  toggleToWatchlistSuccess
} from '../../actions';

jest.mock('../../selectors', () => ({
  watchlistTotalItems: jest.fn(() => 22),
  watchlistCurrentPage: jest.fn(() => 2)
}));
jest.mock('../../../session/selectors', () => ({
  getSessionId: jest.fn(() => '1q2w3e4r5t')
}));
jest.mock('../../actions', () => ({
  fetchWatchlist: jest.fn(),
  toggleToWatchlistSuccess: jest.fn()
}));

describe('toggleToWatchlist logic', () => {
  const done = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();
  const state = getState();
  const sessionId = getSessionId(state);
  const id = 1;
  const watchlist = false;
  const action = {
    type: TOGGLE_TO_WATCHLIST,
    id,
    watchlist,
    needRefetchList: true
  };
  const httpClient = mockHttpClient({ method: 'post', response: {} });
  toggleToWatchlistLogic.process({ getState, httpClient, action }, dispatch, done);

  it('matches snapshot', () => {
    expect(toggleToWatchlistLogic).toMatchSnapshot();
  });

  it('called with right arguments', () => {
    const requestPath = `/account/{account_id}/watchlist?session_id=${sessionId}`;
    const requestBody = {
      media_type: 'movie', /* eslint-disable-line camelcase */
      media_id: id, /* eslint-disable-line camelcase */
      watchlist
    };
    expect(httpClient.post).toHaveBeenCalledWith(requestPath, requestBody);
  });

  describe('success.', () => {
    it('Dispatch toggleToWatchlistSuccess() with arguments', () => {
      expect(toggleToWatchlistSuccess).toHaveBeenCalledWith(id, watchlist);
    });

    describe('Need refetch watchlist.', () => {
      it('Dispatch fetchWatchlist() called with current page', () => {
        expect(fetchWatchlist).toHaveBeenCalledWith(2);
      });

      describe('Dispatch fetchWatchlist()', () => {
        beforeEach(() => {
          watchlistTotalItems.mockImplementation(() => 21);
          watchlistCurrentPage.mockImplementation(() => 2);
          toggleToWatchlistLogic.process({ getState, httpClient, action }, dispatch, done);
        });

        it('called with previous page', () => {
          expect(fetchWatchlist).toHaveBeenCalledWith(1);
        });
      });
    });
  });

  it('have been called done()', () => {
    expect(done).toHaveBeenCalled();
  });
});
