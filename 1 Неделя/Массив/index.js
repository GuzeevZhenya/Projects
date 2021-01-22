let films = ['Матрица','Остаться в живых','Области видимости','Начало','Бэтмен'];

for ( let i = 0;i<films.length;i++){
    console.log(`Элемент массива - ${films[i]}, индекс массива - ${i}`);
}

films.forEach((element,index) => {
    console.log(element,index);
});



let array1 =['Яблоко','Банан','Апельсин','Киви','Арбуз'];
array1.unshift('Картошка');
array1.push('Морковка')
 
let array2 = array1.slice(1,6);
 
array1.forEach((item,index)=>{
    console.log(`элемент-${item}, индекс-${index}`);
});

array2.forEach((item,index)=>{
    console.log(`элемент-${item}, индекс-${index}`);
});