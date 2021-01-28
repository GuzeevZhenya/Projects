const ExampleItem = function(name, phone, mail, cours) {
    this.name = name;
    this.phone = phone;
    this.mail = mail;
    this.cours = cours;
}

// const products = {
//     coursePhp: "course-php",
//     courseWordpress: "course-wordpress",
//     courseVue: "course-vue",
//     courseJS: "course-js",
//     courseHtml: "course-html",
// }

let testData = [
    new ExampleItem("Антон", "64845453", 'Anton@mail.ru', 'course-php'),
    new ExampleItem("Вася", "+3752912423", "Vasiz@mail.ru", "course-wordpress"),
    new ExampleItem("Петя", "+375143231231", "Petia@mail.ru", "course-vue"),
    new ExampleItem("Зина", "+37529123653", "Zina@mail.ru", "course-js"),
    new ExampleItem("Лариса", "+37544221231", "Larisa@mail.ru", "course-html"),
    new ExampleItem("Вика", "+375291231231", "Vika@mail.ru", "course-html"),
]

function getRandomInt(max) {
    return (Math.floor(Math.random() * max));
}

function insertInUI() {
    let random = getRandomInt(testData.length);
    let randomItem = testData[random];

    document.querySelector("#fio").value = randomItem.name;
    document.querySelector("#number").value = randomItem.phone;
    document.querySelector("#email").value = randomItem.mail;
    document.querySelector("#exampleFormControlSelect1").value = randomItem.cours;
}

insertInUI()