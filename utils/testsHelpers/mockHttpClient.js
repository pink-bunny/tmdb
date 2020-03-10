const mockHttpClient = ({ method, response, reject } = { reject: false, response: {} }) => {
  const httpClient = {
    [method]: () => new Promise((resolve, deny) => {
      if (reject) {
        deny(response);
      } else {
        resolve(response);
      }
    })
  };
  jest.spyOn(httpClient, method);
  return httpClient;
};

export default mockHttpClient;
