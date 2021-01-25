const ExampleItem = function(type,desc,sum){
    this.type = type;
    this.desc = desc;
    this.sum = sum;
}

let testData = [
    new ExampleItem("inc","Зарплата",1234),
    new ExampleItem("exp","Налог",564),
    new ExampleItem("exp","Ремонт",76367),
    new ExampleItem("inc","Зарплата",123432),
    new ExampleItem("exp","Еда",12312312),
    new ExampleItem("inc","Фриланс",12364),
]

function getRandomInt(max){
return (Math.floor(Math.random() * max));
}


 

function insertInUI(){
    let random = getRandomInt(testData.length)
    let randomItem = testData[random];

    document.querySelector("#input__type").value = randomItem.type;
    document.querySelector("#input__description").value = randomItem.desc;
    document.querySelector("#input__value").value = randomItem.sum;

}

insertInUI()