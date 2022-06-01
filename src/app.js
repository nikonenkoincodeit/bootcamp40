import 'lazysizes';

import { renderGallery } from './js/renderGallery';
import { initProgressBar } from './js/initProgressBar';
import refs from './js/refs';
import { images } from './js/data/images';

renderGallery(images, refs.imageGallery);
initProgressBar();
