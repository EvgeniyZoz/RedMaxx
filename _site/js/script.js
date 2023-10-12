
let body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let overlay = document.createElement('div');
const accordions = document.querySelectorAll('.accordion');
    
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

// Добавляем обработчик события 'click' для каждого аккордеона
accordions.forEach(accordion => {
    accordion.addEventListener('click', (event) => {
        if (event.target.classList.contains('accordion-button') || event.target.closest('.accordion-button')) {
            const accordionItem = event.target.closest('.accordion-item');
    
            if (accordionItem) {
                const allAccordionItems = accordion.querySelectorAll('.accordion-item');
        
                allAccordionItems.forEach(item => {
                    if (item !== accordionItem) {
                        item.classList.remove('show', 'collapsing');
                    }
                });

                // Переключаем класс 'show' у текущего элемента аккордеона
                accordionItem.classList.toggle('show');
            }
        }
    });
});

window.addEventListener('resize', function() {
    document.body.classList.remove('menuActive');
});

document.addEventListener('DOMContentLoaded', function() {
    const navElement = document.querySelector('.main__nav');
    let navHeight;
    const navLinks = document.querySelectorAll('.main__nav_a, .link');
    const navItems = document.querySelectorAll('.main__nav_li');
    const sections = document.querySelectorAll('.mainNav');
    
    if (navElement) {
        navHeight = navElement.offsetHeight;
    } else {
        navHeight = 0;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // active class of menu items onscroll
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        document.querySelectorAll('.mainNav').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.main__nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.main__nav_li').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });

                document.querySelectorAll('.main__nav_li')[i].classList.add('active');
            }
        });
    });
    
});
