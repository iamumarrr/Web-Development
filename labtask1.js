// Task 1: Largest of Three Numbers
let num1 = 25, num2 = 40, num3 = 18;

if (num1 >= num2 && num1 >= num3) {
    console.log("Largest number is:", num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Largest number is:", num2);
} else {
    console.log("Largest number is:", num3);
}

// Task 2: Positive, Negative or Zero
let number = 5;

if (number > 0) {
    console.log(number, "is Positive");
} else if (number < 0) {
    console.log(number, "is Negative");
} else {
    console.log("The number is Zero");
}

// Task 3: Simple Login System
let correctUsername = "admin";
let correctPassword = "1234";

let enteredUsername = "admin";
let enteredPassword = "1234";

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Task 4: Electricity Bill
let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 10;
} else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
} else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
}
console.log("Units consumed:", units);
console.log("Total Electricity Bill:", bill);

// Task 5: Print Even Numbers 1–50
console.log("Even numbers from 1 to 50:");
for (let i = 2; i <= 50; i += 2) {
    process.stdout.write(i + " ");
}
console.log();

// Task 6: Reverse Counting (20 to 1)
console.log("Reverse counting from 20 to 1:");
for (let i = 20; i >= 1; i--) {
    process.stdout.write(i + " ");
}
console.log();

// Task 7: Factorial Calculator
let factNum = 5;
let factorial = 1;

for (let i = factNum; i >= 1; i--) {
    factorial *= i;
}
console.log("Factorial of", factNum, "is:", factorial);

// Task 8: Count Digits
let digitNum = 12345;
let digitCount = digitNum.toString().length;
console.log("Number:", digitNum);
console.log("Number of digits:", digitCount);

// Task 9: Sum of Even Numbers (1–100)
let evenSum = 0;
for (let i = 2; i <= 100; i += 2) {
    evenSum += i;
}
console.log("Sum of even numbers from 1 to 100:", evenSum);

// Task 10: Prime Number Checker
let primeNum = 17;
let isPrime = true;

if (primeNum <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(primeNum, isPrime ? "is a Prime number" : "is not a Prime number");

// Task 11: ATM Machine
let balance = 5000;
let withdrawAmount = 2000;

console.log("Current balance:", balance);
console.log("Withdraw amount:", withdrawAmount);

if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log("Withdrawal successful! Remaining balance:", balance);
} else {
    console.log("Insufficient balance");
}

// Task 12: Password Strength Checker
let password = "Hello123";
let hasMinLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUppercase = /[A-Z]/.test(password);

console.log("Password:", password);
if (hasMinLength && hasNumber && hasUppercase) {
    console.log("Password is Strong");
} else {
    console.log("Password is Weak");
    if (!hasMinLength) console.log("- Must be at least 8 characters");
    if (!hasNumber) console.log("- Must contain a number");
    if (!hasUppercase) console.log("- Must contain an uppercase letter");
}

// Task 13: FizzBuzz (1–50)
console.log("FizzBuzz from 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "- FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i, "- Fizz");
    } else if (i % 5 === 0) {
        console.log(i, "- Buzz");
    } else {
        console.log(i);
    }
}
