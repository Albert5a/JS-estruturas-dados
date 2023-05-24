let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 19; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)
// Removendo elementos no final da Array
fibonacci.pop();
for (let i = 17; i > 14; i--) {
    fibonacci.pop();
}
console.log(fibonacci);
// Removendo um elemento do início (apenas para finalidades pedagógicas):
for (let i = 0; i < fibonacci.length; i++) {
    fibonacci[i] = fibonacci[i + 1];
}
console.log(fibonacci)
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i])
        }
    }
    return newArray;
}
console.log(fibonacci)
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    return this.reIndex(this);
};
fibonacci = fibonacci.removeFirstPosition();
console.log(fibonacci)
// Removendo com método shitf (para projetos):
fibonacci.shift();
console.log(fibonacci)
// Removendo elementos de uma posição específica
fibonacci.splice(0, 2)
console.log(fibonacci)
fibonacci.splice(2, 2, 69, 71)
console.log(fibonacci)