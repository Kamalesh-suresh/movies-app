import axios from 'axios';

const API = axios.create({ baseURL: 'https://data-imdb1.p.rapidapi.com/titles/search/title/game',params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
    headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': 'd406845fc3msh165a2aa77fd4a7dp1c0805jsna42360d10b2e'
    } });

export const fetchMovies= ()=>API.get();
