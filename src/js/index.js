// import data
// import * as data from './data';

// import bootstrap's all plugins
import * as bootstrap from 'bootstrap';

// import alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;

// document ready event
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
  Alpine.start();
  // alert('lorem');
});

