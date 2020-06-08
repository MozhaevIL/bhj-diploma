class TransactionsWidget {

  constructor(element) {
    if(element) {
      this.element = element; 
      this.registerEvents();
  } else {
    console.log("элемент не найден");
  }
}

  registerEvents() {
    const income = this.element.querySelector(".create-income-button");
    income.addEventListener("click", () =>{
      const incomeModal = new Modal(App.getModal('newIncome').element);
      incomeModal.open();
    })

    const expense = this.element.querySelector(".create-expense-button");
    expense.addEventListener("click", () =>{
      const expenseModal = new Modal(App.getModal('newExpense').element);
      expenseModal.open();
    })
  }
}
