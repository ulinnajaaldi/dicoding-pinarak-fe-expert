import Config from './config';

const API_ENDPOINT = {
  GET_LIST_RESTAURANT: `${Config.BASE_URL}list`,
  GET_DETAIL_RESTAURANT: (id) => `${Config.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${Config.BASE_URL}search?q=${query}`,
  POST_REVIEW: `${Config.BASE_URL}review`,
};

export default API_ENDPOINT;
