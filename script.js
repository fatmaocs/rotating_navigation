

let close_button = document.getElementById('close');
let open_button = document.getElementById('open');
let container = document.querySelector('.container');


open_button.addEventListener('click', () => {
    container.classList.add('show_nav');
});

close_button.addEventListener('click', () => {

    container.classList.remove('show_nav');
});