/* eslint-disable quote-props, quotes */
export const movieInfoResponseSuccess = {
  "data": {
    "adult": false,
    "backdrop_path": "/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
    "belongs_to_collection": null,
    "budget": 75000000,
    "genres": [
      {
        "id": 28,
        "name": "Action"
      }
    ],
    "homepage": "http://www.birdsofpreymovie.net/",
    "id": 495764,
    "imdb_id": "tt7713068",
    "original_language": "en",
    "original_title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    "overview": "After her breakup with the Joker, Harley Quinn joins forces with singer Black Canary, assassin Huntress, and police detective Renee Montoya to help a young girl named Cassandra, who had a hit placed on her after she stole a rare diamond from crime lord Roman Sionis.",
    "popularity": 223.588,
    "poster_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
    "production_companies": [
      {
        "id": 9993,
        "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
        "name": "DC Entertainment",
        "origin_country": "US"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2020-02-05",
    "revenue": 189532223,
    "runtime": 109,
    "spoken_languages": [
      {
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Mind Over Mayhem",
    "title": "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1177
  }
};
export const movieInfoResponseError = {
  "response": {
    "data": {
      "status_code": 34,
      "status_message": "The resource you requested could not be found."
    }
  }
};

export const movieImagesResponseSuccess = {
  "data": {
    "id": 495764,
    "backdrops": [
      {
        "aspect_ratio": 1.777777777777778,
        "file_path": "/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
        "height": 2160,
        "iso_639_1": null,
        "vote_average": 5.456,
        "vote_count": 9,
        "width": 3840
      }
    ],
    "posters": [
      {
        "aspect_ratio": 0.6666666666666666,
        "file_path": "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",
        "height": 3000,
        "iso_639_1": "en",
        "vote_average": 5.654,
        "vote_count": 31,
        "width": 2000
      }
    ]
  }
};

export const movieCreditsResponseSuccess = {
  "data": {
    "id": 495764,
    "cast": [
      {
        "cast_id": 0,
        "character": "Harleen Quinzel / Harley Quinn",
        "credit_id": "5a69364e0e0a260d6400960a",
        "gender": 1,
        "id": 234352,
        "name": "Margot Robbie",
        "order": 0,
        "profile_path": "/pbSz7d1aURy88HGzFWng5EoFU81.jpg"
      }
    ],
    "crew": [
      {
        "credit_id": "5d15bcf550f7ca6e81144a30",
        "department": "Art",
        "gender": 0,
        "id": 1783,
        "job": "Production Design",
        "name": "K.K. Barrett",
        "profile_path": "/8TsblTWtRK28VXyr1EtaIfJWYWP.jpg"
      }
    ]
  }
};

export const movieStatesResponseSuccess = {
  "data": {
    "id": 495764,
    "favorite": false,
    "rated": false,
    "watchlist": true
  }
};
