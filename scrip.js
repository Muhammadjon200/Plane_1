let menu = document.querySelector('.ola');
let side_bar = document.querySelector('.side_bar');
let minus = document.querySelector('.bx-minus');
let disnone = document.querySelector('.a');

menu.addEventListener('click', () => {
    side_bar.style.display = 'flex'
});

minus.addEventListener('click', () => {
    side_bar.style.display = 'none'
})

disnone.addEventListener('click', ()=> {
    side_bar.style.display = 'none'
})