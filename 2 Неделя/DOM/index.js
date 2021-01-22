let newElement = document.createElement('h1');
let newTextNode = document.createTextNode('Текс внутри ноды');
newElement.appendChild(newTextNode);


let container = document.querySelector('#divForElements');
container.after(newElement);
console.log(newElement);
console.log(newTextNode);