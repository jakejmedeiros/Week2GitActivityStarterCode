import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3); //5
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(6, 2); //4
console.log(`result_subtract = ${result_subtract}`);

const result_multiply = calc.multiply(2, 5); //10
console.log(`result_multiply= ${result_multiply}`);

calc.hello()
console.log("done.");
