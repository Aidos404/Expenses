document
	.getElementById('expenseForm')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		const date = document.getElementById('date').value
		const amount = document.getElementById('amount').value
		const category = document.getElementById('category').value
		const comment = document.getElementById('comment').value

		const expense = {
			date: date,
			amount: parseFloat(amount),
			category: category,
			comment: comment,
		}

		let expenses = JSON.parse(localStorage.getItem('expenses')) || []
		expenses.push(expense)
		localStorage.setItem('expenses', JSON.stringify(expenses))

		alert('Расход сохранён!')
		document.getElementById('expenseForm').reset()
		updateExpenseTable()
	})

function updateExpenseTable() {
	const expenses = JSON.parse(localStorage.getItem('expenses')) || []
	const tableBody = document.querySelector('.table tbody')
	tableBody.innerHTML = ''

	expenses.forEach((expense, index) => {
		const row = document.createElement('tr')
		row.innerHTML = `
			<th scope="row">${index + 1}</th>
			<td>${expense.date}</td>
			<td>${expense.amount}</td>
			<td>${expense.category}</td>
			<td>${expense.comment}</td>
		`
		tableBody.appendChild(row)
	})
}

updateExpenseTable()
