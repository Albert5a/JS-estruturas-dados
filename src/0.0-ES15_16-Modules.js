import { circleArea as circle, square } from './1.0-CalcArea';
import Book from './0.1-OutrosExemplos';

console.log(circle(2));
console.log(square(2));

const myBook = new Book('Aloja');
myBook.printTitle();