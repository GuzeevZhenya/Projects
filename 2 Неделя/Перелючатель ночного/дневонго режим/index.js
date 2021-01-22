/*
Сделать ночной режим для страницы.

1. Форкнуть  этот pen к себе в аккаунт.
2. Сделать чтобы при нажатии на кнопку в верхнем правом углу срабатывал гночной режим на странице.

Для ночного режима предусмотрен специальный CSS класс night, который надо применить к тегу <body>
*/

let nightBtn = document.querySelector('.night-mode-btn');
let body = document.querySelector("body")

nightBtn.addEventListener('click', function() {
    body.classList.toggle('night');
    if (body.classList.contains('night')) {
        nightBtn.textContent = 'Включить дневной режим';
    } else {
        nightBtn.textContent = 'Включить ночной режим';
    }
});