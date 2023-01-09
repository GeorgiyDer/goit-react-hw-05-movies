import axios from 'axios';

const API_KEY = `a929247367e6a655cfe576358218294b`;

export const fetch = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response;
};

export const fetchById = async id => {

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`   
    const response = await axios.get(url);
    return response;
};

export const fetchCast = async id => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response;
};

export const fetchReview = async id => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    });
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?${searchParams}`;
    const response = await axios.get(url);
    return response;
};

export const fetchByName = async (name) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: `${name}`,
    });
    const url = `https://api.themoviedb.org/3/search/movie?${searchParams}`;
    const response = await axios.get(url);
    return response;
};
