/**У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:
 * getImagesByQuery(query). Ця функція повинна приймати один параметр query
 *  (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді. */
import axios from 'axios';

const API_KEY = '49617866-877f488ac6d2fa69158bf0643';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data.hits;
}
