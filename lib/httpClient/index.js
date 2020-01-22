import Axios from 'axios';

import { API_HOST } from '../../constants';

const buildHttpClient = () => Axios.create({
  baseURL: `${API_HOST}/`,
  headers: {
    common: {}
  }
});

export default buildHttpClient;
