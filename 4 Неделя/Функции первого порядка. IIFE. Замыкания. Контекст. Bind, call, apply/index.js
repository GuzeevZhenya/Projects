/*
Функция - это сущность типа объект
Фуекции - ведут себя как объекты
Мы можем записать функцию в переменную
Мы можем передать функцию в качестве аргумента в другую функцию
Мы можем вернуть функцию из другой функции

В JS мы имеем функции первого класса
*/

let years = [1990, 2010, 1985, 1975, 2012, 1962];

//Функция для расчета
//Принимает в себя массив
//и функцию которая будет применться к каждому элементу массива
//и выводить расчет

function arrayCalc(arr, fn) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }


    return newArray;
}

//Функция для рассчета возроста
function calcAge(item) {
    return 2020 - item;
}

console.log(arrayCalc(years, calcAge));

function isFullAge(item) {
    return item > 18;
}

let fullAgesArray = arrayCalc(ages, isFullAge);
console.log(fullAgesArray);