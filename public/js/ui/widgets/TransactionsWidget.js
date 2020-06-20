class TransactionsWidget {

  constructor(element) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
  
    this.element = element; 
    this.registerEvents();
  
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
