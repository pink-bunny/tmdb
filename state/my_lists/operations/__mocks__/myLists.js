/* eslint-disable quote-props, quotes */
export const myListsResponseSuccess = {
  "data": {
    "page": 1,
    "results": [
      {
        "description": "My list description",
        "favorite_count": 0,
        "id": 135347,
        "item_count": 0,
        "iso_639_1": "en",
        "list_type": "movie",
        "name": "My list name",
        "poster_path": null
      }
    ],
    "total_pages": 1,
    "total_results": 1
  }
};

export const myListsResponseError = {
  "response": {
    "data": {
      "status_code": 3,
      "status_message": "Authentication failed: You do not have permissions to access the service."
    }
  }
};
