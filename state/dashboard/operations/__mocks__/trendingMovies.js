/* eslint-disable quote-props, quotes */
export const trendingMoviesResponseSuccess = {
  "data": {
    "page": 1,
    "results": [
      {
        "id": 512200,
        "video": false,
        "vote_count": 1938,
        "vote_average": 6.8,
        "title": "Jumanji: The Next Level",
        "release_date": "2019-12-04",
        "original_language": "en",
        "original_title": "Jumanji: The Next Level",
        "genre_ids": [
          28,
          12,
          35,
          14
        ],
        "backdrop_path": "/hreiLoPysWG79TsyQgMzFKaOTF5.jpg",
        "adult": false,
        "overview": "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
        "poster_path": "/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
        "popularity": 267.705,
        "media_type": "movie"
      },
      {
        "id": 330457,
        "video": false,
        "vote_count": 2626,
        "vote_average": 7.1,
        "title": "Frozen II",
        "release_date": "2019-11-20",
        "original_language": "en",
        "original_title": "Frozen II",
        "genre_ids": [
          12,
          16,
          10751
        ],
        "backdrop_path": "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
        "adult": false,
        "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
        "poster_path": "/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
        "popularity": 145.51,
        "media_type": "movie"
      }
    ],
    "total_pages": 1000,
    "total_results": 20000
  }
};

export const trendingMoviesResponseError = {
  "response": {
    "data": {
      "status_code": 22,
      "status_message": "Invalid page: Pages start at 1 and max at 1000. They are expected to be an integer."
    }
  }
};
