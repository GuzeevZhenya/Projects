const ExampleItem = function (name, number, email, cours,id,status,data) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.cours = cours;
    
}

const products = {
    coursePhp: "course-php",
    courseWordpress: "course-wordpress",
    courseVue: "course-vue",
    courseJS: "course-js",
    courseHtml: "course-html",
}

let testData = [
    new ExampleItem("Антон", "64845453", 'Anton@mail.ru', products.courseHtml),
    new ExampleItem("Вася", "+3752912423", "Vasiz@mail.ru", products.courseJS),
    new ExampleItem("Петя", "+375143231231", "Petia@mail.ru", products.courseVue),
    new ExampleItem("Зина", "+37529123653", "Zina@mail.ru", products.courseWordpress),
    new ExampleItem("Лариса", "+37544221231", "Larisa@mail.ru", products.coursePhp),
    new ExampleItem("Вика", "+375291231231", "Vika@mail.ru", products.courseJS),
]

function getRandomInt(max) {
    return (Math.floor(Math.random() * max));
}

function insertInUI() {
    let random = getRandomInt(testData.length)
    let randomItem = testData[random];

    document.querySelector("#fio").value = randomItem.name;
    document.querySelector("#number").value = randomItem.number;
    document.querySelector("#email").value = randomItem.email;
    document.querySelector("#exampleFormControlSelect1").value = randomItem.cours;
}

insertInUI()