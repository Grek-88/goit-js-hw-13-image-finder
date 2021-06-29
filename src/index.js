import addImage from './template/image.hbs';
// document.querySelector('.gallery').innerHTML = addImage();
import getImg from "./js/apiService.js";

import { pnotify, pnotifyRepeat } from './js/pnotify.js';

import { modalImg } from './js/modalImg.js';


const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    btnLodeMore: document.querySelector('.load-more')
    // bigSizeImg: document.querySelector('.photo-card')
};

let page = 1;
let query = '';

refs.form.addEventListener('submit', search);



function search(ev) {
    ev.preventDefault();

    if (ev.target[0].value === '' || ev.target[0].value === ' ') { pnotify(); return;};
    if (query === ev.target[0].value) { pnotifyRepeat(); return;};
        
    query = ev.target[0].value;
    
    
    refs.gallery.innerHTML = '';
    refs.btnLodeMore.classList.remove('non-hidden');
    
    createMarcup();
        
   

    return query;
};


refs.btnLodeMore.addEventListener('click', searchMore);

 function searchMore() {
     page += 1;

     createMarcup();
 };

async function createMarcup() {
try {
    const marcup = await getImg(query, page);

    console.log(query);
    console.log(marcup);
        
    if (marcup.total === 0) {
            pnotify();
            
            return;
        };
        
    refs.gallery.insertAdjacentHTML('beforeend', addImage(marcup.hits));
    refs.btnLodeMore.classList.add('non-hidden');
    
    
    openBigSizeImg();
    
 
} catch (error) {
    console.log(555);
    console.log(error);
        // pnotify();
    
}
};

function openBigSizeImg() {
    const bigSizeImg = document.querySelectorAll('.photo-card > img');
    console.log(bigSizeImg);

    

    // bigSizeImg.addEventListener('click', modalImg);
}



        
   // .then(data => {
        
    //     console.log(query);
    //     console.log(data);

        // if (data.total === 0) {
        //     pnotify();
            
        //     return;
        // };
        
        // refs.gallery.insertAdjacentHTML('beforeend', addImage(data.hits));
        // refs.btnLodeMore.classList.add('non-hidden');


        

    // });