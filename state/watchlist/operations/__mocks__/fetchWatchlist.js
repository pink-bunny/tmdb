/* eslint-disable quote-props, quotes */
export const fetchWatchlistResponseSuccess = {
  "data": {
    "page": 1,
    "results": [
      {
        "id": 111,
        "video": false,
        "vote_count": 6313,
        "vote_average": 8.1,
        "title": "Scarface",
        "release_date": "1983-12-08",
        "original_language": "en",
        "original_title": "Scarface",
        "genre_ids": [
          28,
          80,
          18,
          53
        ],
        "backdrop_path": "/51fjuzYoJKvGW43j32nBpWW6Tm1.jpg",
        "adult": false,
        "overview": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
        "poster_path": "/zr2p353wrd6j3wjLgDT4TcaestB.jpg",
        "popularity": 15.896
      }
    ],
    "total_pages": 1,
    "total_results": 20
  }
};

export const fetchWatchlistResponseError = {
  "response": {
    "data": {
      "status_code": 3,
      "status_message": "Authentication failed: You do not have permissions to access the service."
    }
  }
};
