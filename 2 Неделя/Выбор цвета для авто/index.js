/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

1. Сделать fork данного проекта к себе в аккаунт
2. Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/
let colorsSelector = document.querySelector("#colorsSelector");
let colorItem = document.querySelector(".colorItem");
let carImage = imgHolder.querySelector("img");

colorsSelector.addEventListener("click", function(e) {
    let active = document.querySelector(".colorItem--active");
    if (e.target.classList.contains("colorItem")) {
        if (active) {
            active.classList.remove("colorItem--active");
        }
        e.target.classList.add("colorItem--active");

        let colorCar = e.target.dataset.color;

        carImage.src = `https://webcademy.ru/files/js2020/solaris/${colorCar}.png`;
    }
});