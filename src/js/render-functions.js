export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
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
          < li class= "gallery-item" >
          <a a href = "${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" laoding="lazy" />
          </a>
        <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </>`
    )
    .join('');
  gallery.innerHTML = markup;
}
export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}
export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
