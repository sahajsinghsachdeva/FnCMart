const preloader = document.querySelector(".loader");
const main = document.querySelector('.main');

function loaderFn() {
    setTimeout(() => {
        preloader.style.opacity = 0;
        preloader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => main.style.opacity = 1, 50);
        main.style.opacity = 0;
    }, 1000);  /*sakshi 11-12*/
}
loaderFn();
