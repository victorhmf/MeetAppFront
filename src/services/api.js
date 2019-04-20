import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('@Meetapp_token');

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
