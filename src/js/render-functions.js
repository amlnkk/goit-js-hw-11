// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
            <li class="gallery-item">
            <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" title="">
            </a>
            <div class="info">
            <p>Likes  <span>${image.likes}</span></p> 
            <p>Views  <span>${image.views}</span></p> 
            <p>Comments  <span>${image.comments}</span></p> 
            <p>Downloads  <span>${image.downloads}</span></p> 
            </div> 
            </li>
        `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}
