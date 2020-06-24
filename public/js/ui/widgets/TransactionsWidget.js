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
      App.getModal('newIncome').open();
    })

    const expense = this.element.querySelector(".create-expense-button");
    expense.addEventListener("click", () =>{
      App.getModal('newExpense').open();
    })
  }
}
