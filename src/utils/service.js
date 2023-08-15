import axios from 'axios';
import Cookies from 'universal-cookie';

function getTokenJWT() {
  const cookies = new Cookies();
  const tokenString = cookies.get('token');
  return tokenString;
}

const BASE_URL = ' https://api.jokolodang.com/api/v1';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getTokenJWT()
  },
});

export const get = (endpoint) => {
  return apiService.get(endpoint).then(res => res?.data?.data);
};

export const post = (endpoint, data) => {
  return apiService.post(endpoint, data).then(res => res?.data);
};

export const put = (endpoint, data) => {
  return apiService.put(endpoint, data).then(res => res?.data);
};

export const del = (endpoint) => {
  return apiService.delete(endpoint).then(res => res?.data);
};