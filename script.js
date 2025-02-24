document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'admin';
    const correctPassword = '171051618';

    if (username == correctUsername && password == correctPassword) {
        // Успешная авторизация
        alert('Вход выполнен успешно');
        // Здесь можно перенаправить пользователя на другую страницу или выполнить другие действия
    } else {
        // Ошибка авторизации
        document.getElementById('error-message').textContent = 'Неверный логин или пароль.';
    }
});