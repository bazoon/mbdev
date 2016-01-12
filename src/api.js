import apiConfig from "./api_config.js";
import axios from 'axios';

const menuUrl = 'menu';
const articleUrl = 'article';

//TODO: cache, animate, react-animate, react-motion

export function getIndexItems() {
  return axios.get(apiConfig.url + menuUrl);
}

export function getArticle(id) {
  return axios.get(apiConfig.url + articleUrl + '/' + id);
}
