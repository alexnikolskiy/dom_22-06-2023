const menuItemAbout = document.querySelector('.menu_item_about')
const popupAbout = document.querySelector('.popup_type_about')
const buttonCloseAboutPopup = popupAbout.querySelector('.popup__close')

function togglePopup(ev) {
  popupAbout.classList.toggle('popup_opened')
}

menuItemAbout.addEventListener('click', togglePopup)
buttonCloseAboutPopup.addEventListener('click', togglePopup)
