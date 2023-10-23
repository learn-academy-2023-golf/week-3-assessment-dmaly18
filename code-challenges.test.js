// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// Input: fibonacciLength1, fibonacciLength2
// Output: [1, 1, 2, 3, 5, 8], [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// use length to represent the length of the sequence
// uses a while loop to generate the sequence until the length of the array is less than the specified length.


function generateFibonacci(length) {
  if (length < 1) return [];

  const fibonacci = [1, 1];

  while (fibonacci.length < length) {
    const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
  }

  return fibonacci;
}

describe("generateFibonacci", () => {
  it("should generate a Fibonacci sequence of length 6", () => {
    expect(generateFibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(generateFibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});


// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// Expected output: [15, 15, 20, 30, 30, 60, 90]

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:

// Input: studyMinutesWeek1, studyMinutesWeek2
// Output:[15, 15, 20, 30, 30, 60, 90] [10, 15, 20, 45, 60, 65, 100]
// Create a function that takes a object as input and returns an array.
// Object.values extract the values of the object's properties.
// .sort will sort the numbers from least to greatest.

function sortObjectValues(obj) {
  const values = Object.values(obj);
  return values.sort((a, b) => a - b);
}

describe("sortObjectValues", () => {
  it("should sort values from least to greatest for studyMinutesWeek1", () => {
   
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }

    expect(result).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(result).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});
