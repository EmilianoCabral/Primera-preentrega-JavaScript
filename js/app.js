
//tercer entrega 

document.addEventListener('DOMContentLoaded', function () {
    const expenseList = document.getElementById('expenseList');
    const addExpenseForm = document.getElementById('addExpenseForm');
    const totalAmountSpan = document.getElementById('totalAmount');
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    function renderExpenses() {
        expenseList.innerHTML = '';
        let totalAmount = 0;
        expenses.forEach((expense) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.description} - $${expense.amount.toFixed(2)}
            `;
            expenseList.appendChild(li);
            totalAmount += expense.amount;
        });
        totalAmountSpan.textContent = totalAmount.toFixed(2);
    }
    function addExpense(description, amount) {
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses));
        renderExpenses();
    }
    addExpenseForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const expenseDescriptionInput = document.getElementById('expenseDescription');
        const expenseAmountInput = document.getElementById('expenseAmount');
        const expenseDescription = expenseDescriptionInput.value.trim();
        const expenseAmount = parseFloat(expenseAmountInput.value);
        if (expenseDescription !== '' && !isNaN(expenseAmount) && expenseAmount > 0) {
            addExpense(expenseDescription, expenseAmount);
            expenseDescriptionInput.value = '';
            expenseAmountInput.value = '';
        } else {
            alert('Please enter a valid expense description and amount.');
        }
    });
    renderExpenses();
});