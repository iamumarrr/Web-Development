let numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of the numbers:", sum);

numbers.push(6);
console.log("Array after adding a new number:", numbers);

numbers.shift();
console.log("Array after removing the first number:", numbers);

numbers.reverse();
console.log("Reversed array:", numbers);

console.log("Does the array contain 5?", numbers.includes(5));

const doubled = numbers.map(num => num * 2);
console.log("New array with numbers multiplied by 2:", doubled);

const greaterThanThree = numbers.filter(num => num > 3);
console.log("Numbers greater than 3:", greaterThanThree);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First number divisible by 2:", firstEven);
