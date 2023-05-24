// function isEven(x) {
//     console.log(x)
//     return x % 2 === 0
// }
const isEven = x => {
    console.log(x)
    return x % 2 === 0
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('Every:');
numbers.every(isEven);
console.log('Some:');
numbers.some(isEven);
console.log('ForEach:');
numbers.forEach(x => console.log(x % 2 === 0));
console.log('map:');
const myMap = numbers.map(isEven);
console.log(myMap[0])
console.log('filter:');
const myFilter = numbers.filter(isEven);
console.log(myFilter)
console.log('reduce:');
const myReduce = numbers.reduce((previous, courrent) => previous + courrent)
console.log(myReduce)

