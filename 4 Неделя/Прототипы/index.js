// let john = {
//     name: "John",
//     year: 1990,
//     job: "teacher"
// }


let Person = function(name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    let age = 2020 - this.age;
}

let john = new Person('John', 1990, "teacher");
let jane = new Person('John', 1990, "designer");
let marry = new Person('John', 1990, "programmer");

console.log(john);
console.log(jane);
console.log(marry);

Person.prototype.city = "Moscow";


//Цепочка прототипов на примере массива
let x = [1, 2, 3];
console.log(x);

//Создание объекта с помощью метода Object.create();
let personProto = {
    calculateAge: function() {
        let age = 2020 - this.year;
        console.log(age);
    }
}

let jim = Object.create(personProto);
console.log(jim);
jim.age = "Jim";
jim.job = "teacher";

let liht = Object.create(personProto, {
    name: { value: "Liht" },
    year: { value: 1990 },
    job: { value: 'proger' }
})

//Пример с примитивами
let a = 20;
let b = a;
a = 50;

//Пример с объектами
let object1 = {
    name: 'john',
    age: 25
}

let object2 = object1;
object1.age = 30;

//Пример с функциями помощью
let number = 30;
let object = {
    name: 'john',
    city: 'Moscow'
}

function numObj(a, b) {
    a = 50;
    b.city = 'Kiev';
}

numObj(number, object);
console.log(number);
console.log(object);

//Пример с массивами
let arr = [1, 2, 3];
let arr2 = arr;
arr2[2] = 10;
console.log(arr); //1,2,10