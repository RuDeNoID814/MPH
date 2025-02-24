// Кнопка "Начало работы"
document.getElementById('start-work-btn').addEventListener('click', function() {
    window.open('https://supchat.taxi.yandex-team.ru/settings', '_blank');
    window.open('https://yandex.ru/maps/', '_blank');
    window.open('https://delivery-admin-frontend-external.taxi.yandex-team.ru/corp-claims?external_order_id=307577825', '_blank');
});
// Меню с выходом и связью
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
let timeout;

menuIcon.addEventListener('mouseenter', function() {
    clearTimeout(timeout);
    menu.classList.add('show');
});

menuIcon.addEventListener('mouseleave', function() {
    timeout = setTimeout(() => {
        menu.classList.remove('show');
    }, 300);
});

menu.addEventListener('mouseenter', function() {
    clearTimeout(timeout);
    menu.classList.add('show');
});

menu.addEventListener('mouseleave', function() {
    timeout = setTimeout(() => {
        menu.classList.remove('show');
    }, 300);
});

document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('authenticated');
    window.location.replace('index.html');
});

// Система бездействия
let inactivityTime = 21600000; // 6 часов в миллисекундах
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function()   {
        localStorage.removeItem('authenticated');
        window.location.replace = 'index.html';
    }, inactivityTime);
}

window.addEventListener('mouse', resetTimeout);
window.addEventListener('keypress', resetTimeout);
window.addEventListener('click', resetTimeout);

// Проверка авторизации при загрузке страницы
window.addEventListener('load', function()  {
    if (!localStorage.getItem('authenticated')) {
        window.location.replace('index.html');
    } else {
        resetTimeout();
    }
});