
let body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let overlay = document.createElement('div');
    
overlay.classList.add('site-overlay');
body.appendChild(overlay);

// Додаємо обробник події 'click' для елементів з класом '.menu-btn' в 'body'
body.addEventListener('click', function(event){
    // Перевіряємо, чи був клік на елементі з класом '.menu-btn'
    if (event.target.classList.contains('menu-btn') || event.target.closest('.menu-btn')) {
        
        body.classList.toggle('menuActive');
        // Перевіряємо, чи тепер елемент має клас 'btnActive'
        if (body.classList.contains('menuActive')) {
            
        } else {
            // Видаляємо клас 'menuActive' з 'body'
            body.classList.remove('menuActive');
        }
    }
    // Перевіряємо, чи був клік на елементі з класом '.site-overlay'
    if (event.target.classList.contains('site-overlay')) {
        // Видаляємо клас 'menuActive' з 'body'
        body.classList.remove('menuActive');
    }
});

window.addEventListener('resize', function() {
    document.body.classList.remove('menuActive');
});