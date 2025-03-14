// Скрипт авторизации на сайте
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin';
    const correctPassword = '171051618';

    if (username == correctUsername && password == correctPassword) {
        // Успешная авторизация и перенаправление на другую страницу
        localStorage.setItem('authenticated', 'true');
        window.location.href = "main.html";
    } else {
        // Ошибка авторизации
        document.getElementById('error-message').textContent = 'Неверный логин или пароль';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

// Очистка полей при возврате на страицу
window.addEventListener('pageshow', function(event) {
    if (event.persisted || (this.window.performance && window.performance.navigation.type === 2)) {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

// Проверка авторизации при загрузке страницы
window.addEventListener('load', function() {
    if (localStorage.getItem('authenticated')) {
        window.location.replace('main.html');
    }
});