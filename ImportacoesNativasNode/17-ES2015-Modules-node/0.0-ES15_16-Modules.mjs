import { circleArea as circle, square } from './1.0-CalcArea.mjs';
import Book from './0.1-OutrosExemplos.mjs';

console.log(circle(2));
console.log(square(2));

const myBook = new Book('Aloja');
myBook.printTitle();