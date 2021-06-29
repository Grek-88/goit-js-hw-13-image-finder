import addImage from './template/image.hbs';

import getImg from "./js/apiService.js";

import { pnotify, pnotifyRepeat } from './js/pnotify.js';

import { modalImg } from './js/modalImg.js';


const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    btnLodeMore: document.querySelector('.load-more')
};

let page = 1;
let query = '';

refs.form.addEventListener('submit', search);

function search(ev) {
    ev.preventDefault();

    if (ev.target[0].value === '' || ev.target[0].value === ' ') {pnotify(); return;};
    if (query === ev.target[0].value) {pnotifyRepeat(); return;};
        
    query = ev.target[0].value;
    
    refs.gallery.innerHTML = '';
    refs.btnLodeMore.classList.remove('non-hidden');
    
    page = 1;
    createMarcup();
        
    return query;
};

refs.btnLodeMore.addEventListener('click', searchMore);
async function searchMore() {
page += 1;

const result = await createMarcup();

scrolling();
};

async function createMarcup() {
try {
    const marcup = await getImg(query, page);
        
    if (marcup.total === 0) {pnotify(); return;};
        
    refs.gallery.insertAdjacentHTML('beforeend', addImage(marcup.hits));
    refs.btnLodeMore.classList.add('non-hidden');
  
} catch (error) {
    pnotify();    
}
};

refs.gallery.addEventListener('click', openBigSizeImg);
function openBigSizeImg(e) {
    modalImg(e.target.dataset.details);
};

function scrolling() {
    refs.btnLodeMore.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
    });
};