import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return;
      } 
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
          onShow: (instance) => {
            document.addEventListener('keydown', closeOnEsc)},
          onClose: (instance) => {
            document.removeEventListener('keydown', closeOnEsc)},
        })
        instance.show() 
          
        function closeOnEsc (event) {
          if (event.key !== 'Escape') {
            return;
          } 
          instance.close() 
         }      
})

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.