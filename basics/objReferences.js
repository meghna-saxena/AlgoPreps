// Reference to same object in memory

let myAccount = {
    name: 'Meg Saxena',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount //account.expenses += amount
}

addExpense(myAccount, 2.50)
console.log(myAccount) //mutating object