
// Код сброса флага авторизации и выход с сайта на index.html
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