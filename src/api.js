import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
        'X-RapidAPI-Key': 'f471418038mshaefa2df6f2ac2f5p1a8065jsnbb039b717f72',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

export default async function fetchGameList() {
    return axios.request(options).then((response) => response.data);
}