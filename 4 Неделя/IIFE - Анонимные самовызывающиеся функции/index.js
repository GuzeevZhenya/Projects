// IIFE - Imidietly invoked function expression
//(Немедленно) самовызывающиеся функции(функциональные выражения)

//1 global variant
let score = Math.random() * 10; // 1-10
console.log(score);

//IIFE variant
(function() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

//IIFE - это не повторно используемый код