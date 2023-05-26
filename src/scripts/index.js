import '../styles/reset.css';
import '../styles/styles.css';
import menu from '../images/icons/menu.svg';



/**
 *  Add image data for drop down button
 */
// eslint-disable-next-line no-param-reassign
document.querySelectorAll('img').forEach(el => {el.src = menu;});



/**
 *  Implement drop down button functionality
 */
document.querySelectorAll('.drop-button').forEach(el => {
  el.addEventListener('click', event => {
    const dropCard = event.target.parentNode.querySelector('.drop-card');
    switch(dropCard.classList.length){
      case 1:
        dropCard.className = 'drop-card hidden';
        break;
      case 2:
        dropCard.className = 'drop-card';
        break;
      default:
    }
  });
});