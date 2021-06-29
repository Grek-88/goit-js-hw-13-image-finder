const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22269453-01e35d719392ba61f98a14ac3';


export default async function getImg(query, page) {
    const url = `${BASE_URL}?key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${query}`;

    let result = await fetch(url).then(response => response.json());

    return result;
};