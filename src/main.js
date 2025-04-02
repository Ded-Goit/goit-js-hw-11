import axios from 'axios';
import fetchImages from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
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
    const images = await fetchImages(query);
    if (images.lenght === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matcing your search query. Please try again!',
      });
    } else {
      renderGallery(images);
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      message: 'something went wrong. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});
