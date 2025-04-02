export async function fetchImages(query) {
  const API_KEY = '49617866-877f488ac6d2fa69158bf0643';
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query, //слово для пошуку. Те, що буде вводити користувач.
      image_type: 'photo', //тип зображення. Потрібні тільки фотографії
      orientation: 'horizontal', // орієнтація фотографії.
      /*safesearch: true, // фільтр за віком.*/
    },
  });
  return response.data.hits;
}
