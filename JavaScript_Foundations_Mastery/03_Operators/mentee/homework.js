// OPERATORS HOMEWORK – SIMPLE BUDGET
// -------------------------------------------------
// GOAL: Use operators to calculate how much money is left after expenses
//       and print a summary in the console.

// STEP 1: Create a variable called monthlyIncome (number)
//         with how much money you receive in a month.
let monthlyIncome = 1500;

console.log("Monthly Income: " + monthlyIncome + " GBP")
// STEP 2: Create a variable called rentCost (number)
//         with how much you pay for rent.
 let rentCost = 600;

 console.log("Rent: " + rentCost + " GBP");
// STEP 3: Create a variable called foodCost (number)
//         with how much you spend on food.
let foodCost = 200;

console.log("Food shopping: " + foodCost + " GBP");
// STEP 4: Create a variable called transportCost (number)
//         with how much you spend on transportation.
let transportCost = 101.79;

console.log("TFL /month: " + transportCost + " GBP");
// STEP 5: Create a variable called funBudget (number)
//         with how much money you like to save for fun activities.
let funBudget = 300;

console.log("Money for fun: " + funBudget + " GBP");
// STEP 6: Create a variable called totalExpenses.
//         Use the + operator to add rentCost, foodCost, transportCost, and funBudget
//         together and store the result in totalExpenses.
let totalExpenses = rentCost + foodCost + transportCost + funBudget;

console.log("Total Monthly Expenses: "+ totalExpenses + " GBP");
// STEP 7: Create a variable called moneyLeft.
//         Use the - operator to subtract totalExpenses from monthlyIncome.
let moneyLeft = monthlyIncome - totalExpenses;
console.log("Cash after expeneses: " + moneyLeft + " GBP" );

// STEP 8: Use console.log to print a clear summary, for example:
//         --- SIMPLE BUDGET ---
//         Monthly income: ...
//         Total expenses: ...
//         Money left: ...
console.log("--- SIMPLE BUDGET",
    "Monthly Income: "+ monthlyIncome + " GBP",
    "Total expenses: " + totalExpenses + " GBP",
    "Money Left: " + moneyLeft + " GBP",);

// STEP 9: Now imagine you decide to increase your funBudget a little.
//         Use the += operator to add some extra amount to funBudget,
//         for example funBudget += 500;
funBudget += 30;

console.log("10% increase on Fun Budget: " + funBudget + " GBP" );
// STEP 10: Recalculate totalExpenses and moneyLeft with the new funBudget value.
totalExpenses = rentCost + foodCost + transportCost + funBudget;
moneyLeft = monthlyIncome - totalExpenses;

console.log("Total Expense after increase: "+ totalExpenses + " GBP");
console.log("Money left after increase: "+ moneyLeft + " GBP");

// STEP 11: Use console.log again to print an UPDATED summary
//          that shows how much money is left after increasing your funBudget.

console.log("--UPDATED BALANCE--",
    "Monthly Income: "+ monthlyIncome + " GBP",
    "Total expenses: " + totalExpenses + " GBP",
    "Money Left: " + moneyLeft + " GBP",);
``