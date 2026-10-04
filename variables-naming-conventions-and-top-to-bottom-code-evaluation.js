/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/
/*
let a = "Alice"; // Original variable name is unclear; it should be more descriptive.
let b = 5;   // B is set to a letter, but the value declared is a number. It should be renamed to reflect its purpose.
let c = 20;  // C is set to a letter, but the value declared is a number. It should be renamed to reflect its purpose.
let d = a + " bought " + b + " items for $" + c + "."; //D should have more descriptive name to reflect its purpose.

console.log(d);
*/
// Refactored Code with Descriptive Variable Names and Additional Variables
let nameOfCustomer = "Alice"; // Renamed from 'a' to 'name' for clarity.
let numberOfItems = 5; // Renamed from 'b' to 'numberOfItems' for clarity.
let costOfItems = 20; // Renamed from 'c' to 'costOfItems' for clarity.
let purchaseSummary = nameOfCustomer + " bought " + numberOfItems + " items for $" + costOfItems + "."; // Renamed from 'd' to 'purchaseSummary' for clarity.
console.log(purchaseSummary);


