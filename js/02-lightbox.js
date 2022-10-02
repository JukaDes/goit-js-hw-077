import { galleryItems } from './gallery-items.js';

const markUp = galleryItems.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')

const galleryEl = document.querySelector('.gallery')
galleryEl.insertAdjacentHTML('afterbegin', markUp)

const lightbox = 
       new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
       });

galleryEl.addEventListener('click', event => {
    event.preventDefault()

    if (event.target.nodeName !== 'IMG') {
        return;
      }  
})