let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 19; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)
// Adicionando elementos no final da Array:
fibonacci[fibonacci.length] = 4;
fibonacci.push(6, 7);
console.log(fibonacci);
// Adicionando elementos no inicio da Array:
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
fibonacci.insertFirstPosition(9);
console.log(fibonacci);
fibonacci.unshift(0)
console.log(fibonacci);