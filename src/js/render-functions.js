/**У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном
 *  та зберігай функції для відображення елементів інтерфейсу:
 * createGallery(images). Ця функція повинна приймати масив images, 
 * створювати HTML-розмітку для галереї, додавати її в контейнер галереї 
 * та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає. */
/**Робота модального вікна пов'язана з самою галереєю, тому використання бібліотеки SimpleLightbox
 * і методу екземпляру refresh() буде доцільним у файлі render-functions.js. */


const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </li>
  `
    )
    .join('');
  gallery.innerHTML = markup;
  /*lightbox.refresh(); // Оновлення SimpleLightbox після додавання нових зображень*/
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  /*console.log(' Лоадер Показано');*/
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  /*console.log(' Лоадер Приховано');*/
  document.querySelector('.loader').classList.add('hidden');
}
