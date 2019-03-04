// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses  -> Meg has $1250 in expenses.

// add income array to account
// addIncome method -> description, amount
// tweak getAccountSummary -> Meg has balance of $10. $100 in income. $90 in expenses.

const account = {
    name: 'Meg Saxena',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalIncome = 0
        this.income.forEach(function (amt) {
            totalIncome += amt.amount
        })
        let totalExpense = 0
        this.expenses.forEach(function (expense) {
            totalExpense += expense.amount // total = total + expense.amount
        })
        const balance = totalIncome - totalExpense
        return `${this.name} has balance of $${balance}. $${totalIncome} in income. $${totalExpense} in expenses.`
    }
}

account.addExpense('Rent', 1050)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1500)
console.log(account.getAccountSummary())
