const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';


function modalImg(url) {
    const instance = basicLightbox.create(`
        <img src='${url}' width="800" height="600">
    `)
    
    instance.show();
}

export { modalImg };