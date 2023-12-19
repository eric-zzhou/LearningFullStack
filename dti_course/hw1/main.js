// This assignment tests your ability to write normal, imperative JavaScript code.
// Our goal is just to get you used to the syntax of JavaScript -- especially if you come from a background in Python or a similar, vastly different language.
// If you find this assignment difficult, we recommend re-assessing your fundamental knowledge. Again, we highly recommend you have taken CS 1110 or equivalent before taking this course.
// Each question is worth 10 points. You start off with 10 points for free!
// Once you have a solution, you can run `pnpm test` to run the sample test cases we have provided.
// This does not guarantee that you will get full credit on the autograder, but it is a good start!
// Let us know if you have any questions or concerns on Ed!

// You should be able to run `pnpm test` in your terminal to run the sample test cases we have provided!

// QUESTION 1: Sum of Array (10 points)
// Write a function that takes an array of numbers and returns the sum of all the numbers.
// INPUT: An array of numbers [n1, n2, n3, ...]
// OUTPUT: Sum of all numbers in the array.
export const sumOfArray = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

// QUESTION 2: Filter Even Numbers (10 points)
// Write a function that filters out all the odd numbers from an array and returns a new array of even numbers.
// INPUT: An array of numbers [n1, n2, n3, ...]
// OUTPUT: An array of even numbers.
export const filterEvenNumbers = (numbers) => {
    return numbers.filter(x => x % 2 === 0);
};

// QUESTION 3: String Reversal (10 points)
// Write a function that takes a string and returns it reversed.
// INPUT: A string "inputString"
// OUTPUT: The reversed string.
export const reverseString = (inputString) => {
    let ret = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        ret += inputString[i];
    }
    return ret;
};

// QUESTION 4: Temperature Converter (10 points)
// Write a function that takes a temperature in Fahrenheit and converts it to Celsius.
// INPUT: Temperature in Fahrenheit
// OUTPUT: Temperature in Celsius
export const convertToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

// QUESTION 5: Find Duplicate Characters (10 points)
// Write a function that takes a string and returns an array of characters that appear more than once in the string.
// INPUT: A string "inputString"
// OUTPUT: An array of characters that appear more than once, sorted in alphabetical order.
export const findDuplicates = (inputString) => {
    let exists = new Set();
    let done = new Set();
    let ret = [];
    for (let i = 0; i < inputString.length; i++) {
        let curr = inputString[i];
        if (exists.has(curr)) {
            if (!done.has(curr)){
                ret.push(curr);
                done.add(curr);
            }
        } else {
            exists.add(curr);
        }
    }
    return ret.sort();
};

// QUESTION 6: Highest Profit Opportunity (10 points)
// Given an array representing stock prices over time, identify the indices of the time to buy and sell to gain the highest profit.
// Assume that you must buy before you sell.
// INPUT: An array of numbers [p1, p2, p3, ...]
// OUTPUT: An object { buyIndex: x, sellIndex: y }.
// If there is no best time, return -1 in place of x and y;
export const highestProfitOpportunity = (prices) => {
    let currMin = prices[0];
    let currMinIndex = prices[0];
    let minIndex = -1;
    let maxProfit = 0;
    let maxIndex = -1;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < currMin) {
            currMinIndex = i;
            currMin = prices[i];
        }
        if (prices[i] - currMin > maxProfit) {
            maxProfit = prices[i] - currMin;
            minIndex = currMinIndex;
            maxIndex = i;
        }
    }
    if (!maxProfit){
        return -1;
    }
    return {"buyIndex": minIndex, "sellIndex": maxIndex};
};

// QUESTION 7: Palindrome Checker (10 points)
// Write a function that checks if a given word or phrase is a palindrome (reads the same backward as forward, ignoring spaces).
// INPUT: A string "inputString"
// OUTPUT: A boolean value - true if palindrome, false otherwise.
export const isPalindrome = (inputString) => {
    let i = 0;
    let n = inputString.length;
    while (i < n - i - 1) {
        if (inputString[i] != inputString[n - i - 1]) {
            return false;
        }
        i++;
    }
    return true;
};

// QUESTION 8: Prime Number Checker (10 points)
// Write a function that checks if a given number is prime.
// INPUT: A number "n"
// OUTPUT: A boolean value - true if prime, false otherwise.
export const isPrime = (n) => {
    for (let i = 2; i < Math.ceil(Math.sqrt(n)); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
};

// QUESTION 9: Fibonacci Sequence (10 points)
// Write a function that returns the nth number in the Fibonacci sequence.
// INPUT: An integer n (1 <= n <= 50)
// OUTPUT: The nth number in the Fibonacci sequence.
export const fibonacci = (n) => {
    let dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
