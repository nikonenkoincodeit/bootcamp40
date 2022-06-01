import throttle from 'lodash.throttle';
import refs from './refs';

const getProgressValue = () => {
  const siteHeight = document.documentElement.scrollHeight;
  const scrollValue = window.scrollY;
  const windowHeight = window.innerHeight;
  let progress = Math.floor((scrollValue / (siteHeight - windowHeight)) * 100);

  refs.progressBar.style.width = progress + '%';
};

export const initProgressBar = () => {
  window.addEventListener('scroll', throttle(getProgressValue, 300));
};
