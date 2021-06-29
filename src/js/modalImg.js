const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

const modalImg = instance.show;
// console.log(555);
export { modalImg };