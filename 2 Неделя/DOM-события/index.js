//1 Отслеживаиние события

// Функция которая запускается по клику
function someFunc() {
    alert('Клик по кнопке');
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(event) {
    console.log(event);
    console.log(event.target);
})

//Всплытие события и его отмена
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