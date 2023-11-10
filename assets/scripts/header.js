const title = document.querySelector(".header__title");

initTitle();

function initTitle() {
    title.addEventListener('click', function(){
        location.href = "./";
    }, false);
}