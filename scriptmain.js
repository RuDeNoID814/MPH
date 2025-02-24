// Кнопка "Начало работы"
document.getElementById('start-work-btn').addEventListener('click', function()  {
    window.open('https://supchat.taxi.yandex-team.ru/settings', '_blank');
    window.open('https://yandex.ru/maps/', '_blank');
    window.open('https://delivery-admin-frontend-external.taxi.yandex-team.ru/corp-claims?external_order_id=307577825', '_blank');
});
// Кнопка "Выход"
document.getElementById('logout-btn').addEventListener('click', function()  {
    sessionStorage.removeItem('authenticated');
    window.location.href = 'index.html';
});

// Система бездействия
let inactivityTime = 300000; // 5 минут в миллисекундах
let timeoutId;

function resetTimeout() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function()   {
        sessionStorage.removeItem('authenticated');
        window.location.href = 'index.html';
    }, inactivityTime);
}

window.addEventListener('mouse', resetTimeout);
window.addEventListener('keypress', resetTimeout);
window.addEventListener('click', resetTimeout);

//Проверка авторизации при загрузке страницы
window.addEventListener('load', function()  {
    if (!sessionStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    } else {
        resetTimeout();
    }
});