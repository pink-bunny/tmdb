/* eslint-disable quote-props, quotes */
export const fetchFavoritesResponseSuccess = {
  "data": {
    "page": 1,
    "results": [
      {
        "id": 419704,
        "video": false,
        "vote_count": 2585,
        "vote_average": 6,
        "title": "Ad Astra",
        "release_date": "2019-09-17",
        "original_language": "en",
        "original_title": "Ad Astra",
        "genre_ids": [
          12,
          18,
          9648,
          878,
          53
        ],
        "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
        "adult": false,
        "overview": "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        "poster_path": "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        "popularity": 365.75
      }
    ],
    "total_pages": 1,
    "total_results": 1
  }
};

export const fetchFavoritesResponseError = {
  "response": {
    "data": {
      "status_code": 3,
      "status_message": "Authentication failed: You do not have permissions to access the service."
    }
  }
};
