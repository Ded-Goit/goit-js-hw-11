/**У файлі main.js напиши всю логіку роботи додатка.
 * Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
 *  Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент. */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
const lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);

    if (images.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
});
