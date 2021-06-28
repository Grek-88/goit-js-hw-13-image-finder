import addImage from './template/image.hbs';
// document.querySelector('.gallery').innerHTML = addImage();
import getImg from "./js/apiService.js";

import { pnotify } from './js/pnotify.js';



const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    btnLodeMore: document.querySelector('.load-more')
};

let page = 1;
let query = '';
// refs.form.addEventListener('input', getQuery);
refs.form.addEventListener('submit', search);



function search(ev) {
    ev.preventDefault();

    if (query === ev.target[0].value || ev.target[0].value === '' || ev.target[0].value === ' ') { pnotify(); return;};
        
    query = ev.target[0].value;
    
    
    refs.gallery.innerHTML = '';
    refs.btnLodeMore.classList.remove('non-hidden');
    
    
    // if (!createMarcup()) {
    //     ev.target[0].value = '';
    //     pnotify();
    //     return;
    // }
    createMarcup();
        
    
    return query;

};


refs.btnLodeMore.addEventListener('click', searchMore);



 function searchMore() {
     page += 1;

     createMarcup();
 };



function createMarcup() {
try {
          getImg(query, page)
        .then(data => {
            
            console.log(query);
            console.log(data);

            if (data.total === 0) {
                pnotify();
                
                return;
            };
            
            refs.gallery.insertAdjacentHTML('beforeend', addImage(data.hits));
            refs.btnLodeMore.classList.add('non-hidden');

        });
} catch (error) {
    pnotify();
}
};


