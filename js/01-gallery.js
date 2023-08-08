// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery 
// і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. 
// Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.



import { galleryItems } from './gallery-items.js';
// // Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery')

function createMarkup(arr) {

  return arr.map(({ preview, original, description }) => ` 
     <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"  />
      </a>
    </li>   

   `).join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerProductClick);


function handlerProductClick(evt) {
  // console.log(evt.key);
  // console.log(evt.code);
  evt.preventDefault();

  if (evt.target === evt.currentTarget) {

    return
  }
  const sourse = evt.target.dataset.source;
  // console.log(evt.target.dataset);
  // console.log(sourse);

  const instance = basicLightbox.create(`
    <img src="${sourse}" >
`)
  instance.show();

  container.addEventListener('keydown', evt => {
    // console.log(evt.key);
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}




