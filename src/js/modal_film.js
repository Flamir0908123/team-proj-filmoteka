// const btnModalImgClose = document.querySelector('.button__close');
// console.log(btnModalImgClose);
// const backdropModalImg = document.querySelector('.backdrop');
// console.log(backdropModalImg);
// btnModalImgClose.addEventListener('click', onBtnModalImgClose);
// backdropModalImg.addEventListener('click', onBtnModalImgClose);
// export default function onBtnModalImgClose() {
//   backdropModalImg.classList.add('is-hidden');
// }

// // btnModalImgClose.addEventListener('click', closeModalClick);
// // function closeModalClick() {
// //   backdropModalImg.classList.add('is-close');
// //

// const listWatched = document.createElement('ul');
// listWatched.classList.add('modal_list_watched');

// const listWillWatch = document.createElement('ul');
// listWillWatch.classList.add('modal_list_willwatch');

// const refs = {
//   buttonWatched: document.querySelector('.add_watched'),
//   buttonUser: document.querySelector('.add_queue'),
// };

// /* FT - 18 По нажатию на кнопку "Add to watched"
// фильм добавляется в просмотренные
// фильмы текущего пользователя(local - storage) */

// /* FT - 19 По нажатию на кнопку "Add to queue"
// фильм добавляется
// в очередь текущего пользователя(local - storage) */

// /* console.log(localStorage); */

// refs.buttonWatched(click, onAddWatched);
// function onAddWatched() {
//   console.log(e.currentTarget);
//   const movie = e.currentTarget;
//   localStorage.setItem(movie);
//   listWatched.insertAdjacentHTML('beforeend', localStorage.setItem(movie));
// }
// refs.buttonUser(click, onHaveToWatch);

// function closeModalCardMovie(e) {
//   const onOverlayCloseBtn = e.target !== lightboxCloseBtn;
//   /* console.log(e.currentTarget); */
//   if (onOverlayCloseBtn) {
//     removeLightboxIsOpen();
//     removeAtributes();
//   }
// }
// function removeLightboxIsOpen() {
//   lightbox.classList.remove('is-open');
// }

// function removeAtributes() {
//   lightBoxImage.src = '';
//   lightBoxImage.alt = '';
// }
