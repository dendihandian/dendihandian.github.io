// require('startbootstrap-freelancer/dist/js/scripts');

require('./data');

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
});