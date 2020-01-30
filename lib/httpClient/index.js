import Axios from 'axios';

import { API_HOST, API_KEY } from '../../constants';

const buildHttpClient = () => {
  const instance = Axios.create({
    baseURL: `${API_HOST}/`,
    headers: {
      common: {}
    }
  });

  instance.interceptors.request.use((config) => {
    const params = config.params || {};
    /* eslint-disable-next-line */
    params.api_key = API_KEY;
    /* eslint-disable-next-line */
    config.params = params;
    return config;
  });

  return instance;
};

export default buildHttpClient;
