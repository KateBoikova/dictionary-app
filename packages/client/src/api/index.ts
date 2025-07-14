import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createWord = body => {
  httpClient.post('/words', body);
};

export const getWords = () => httpClient.get('/words');

export const deleteWord = id => httpClient.delete('/words/${id}');
