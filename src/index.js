// JS Goes here - ES6 supported

import 'progressive-image/progressive-image.js';
import './css/main.scss';

// Format all the date in Japanese format.
//
// Example
//
//     Before: <time datetime="2020-07-05T16:12:34.567Z">2020-07-05</time>
//     After: <time datetime="2020-07-05T16:12:34.567Z">2020年7月5日(日)</time>
//
document.addEventListener('DOMContentLoaded', (e) => {
  Array.from(document.getElementsByTagName('time')).forEach((t) => {
    const value = t.getAttribute('datetime');
    t.innerHTML = new Date(value).toLocaleDateString('ja', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  });
});
