import axios from 'axios';
import { endpoint } from '../constants/apiRoutes';

const omdb = axios.create({
  baseURL: endpoint.omdbApi,
  params: {
    apiKey: 'faf7e5bb',
  },
});

export default {
  omdb,
};
