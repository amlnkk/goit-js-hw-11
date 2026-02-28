import { getImagesByQuery } from './js/pixabay-api';
import { createGallery,clearGallery, showLoader, hideLoader } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
    }
    
    clearGallery();
    showLoader();

  getImagesByQuery(query)
    .then(data => {
        if (data.hits.length === 0) {
            hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
          return;
        }
        
        createGallery(data.hits);
        hideLoader();
    })
      
      .catch(error => {
          hideLoader();
      console.log(error);
    });
});
