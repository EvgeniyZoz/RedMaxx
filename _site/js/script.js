// Вибираємо елемент body
let body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');

// Додаємо обробник події 'click' для елементів з класом '.menu-btn' в 'body'
body.addEventListener('click', function(event){
    
    // Перевіряємо, чи був клік на елементі з класом '.menu-btn'
    if (event.target.classList.contains('menu-btn')) {
        // Змінюємо клас 'btnActive' для поточного елемента
        menuBtn.classList.toggle('btnActive');
        
        // Перевіряємо, чи тепер елемент має клас 'btnActive'
        if (event.target.classList.contains('btnActive')) {
            // Додаємо клас 'menuActive' до 'body'
            body.classList.add('menuActive');
            
            // Створюємо новий елемент div з класом '.site-overlay'
            var overlay = document.createElement('div');
            overlay.classList.add('site-overlay');
            
            // Додаємо новий елемент до 'body'
            body.appendChild(overlay);
        } else {
            // Видаляємо клас 'menuActive' з 'body'
            body.classList.remove('menuActive');
            
            // Знаходимо всі елементи з класом '.site-overlay' і видаляємо їх
            document.querySelector('.site-overlay').remove();
            
            // Знаходимо всі елементи з класом '.menu-btn' і видаляємо клас 'btnActive'
            event.target.classList.remove('btnActive');
        }
    }
    // Перевіряємо, чи був клік на елементі з класом '.site-overlay'
    if (event.target.classList.contains('site-overlay')) {
        // Видаляємо клас 'menuActive' з 'body'
        body.classList.remove('menuActive');
        
        // Знаходимо всі елементи з класом '.site-overlay' і видаляємо їх
        document.querySelector('.site-overlay').remove();
            
        // Знаходимо всі елементи з класом '.menu-btn' і видаляємо клас 'btnActive'
        event.target.classList.remove('btnActive');
    }
});
