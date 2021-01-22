function calculateTips(n) {
    if (n < 1000) {
        return n * 0.2;
    }
    if (n >= 1000 && n < 3000) {
        return n * 0.15;
    }
    if (n >= 3000) {
        return n * 0.1;
    }
}


console.log(calculateTips(1000)); // При чеке в 1000 рублей, чаевые составят 200 рублей. 
console.log(calculateTips(2000)); // При чеке в 2000 рублей, чаевые составят 300 рублей. 
console.log(calculateTips(5000)); // При чеке в 5000 рублей, чаевые составят 500рублей. рублей.