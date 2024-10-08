let totalBudget = 300000
function addExpense(expense){
    totalBudget +=expense;
    console.log(`Expense added: $${expense}. Total budget: $${totalBudget}`);
}
function getExpenseDetails(description, cost){
    console.log(`Expense:${description}-$${cost}`);
}
function resetBudget(){
    totalBudget=300000
    console.log (`Total budget has been reset`);
}
addExpense(3000);
getExpenseDetails('NHIF',2500);
resetBudget()