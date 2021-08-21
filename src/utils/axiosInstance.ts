import axios from 'axios';
import { endpoint } from '../constants/apiRoutes';

const omdb = axios.create({
  baseURL: endpoint.omdbApi,
  params: {
    apiKey: 'acc12812',
  },
});

export default {
  omdb,
};
