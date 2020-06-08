class CreateTransactionForm extends AsyncForm {

  constructor(element) {
    super(element);
    this.renderAccountsList();
  }


  renderAccountsList() {  
    const options = Array.from(this.element.querySelectorAll("option"));
    for(let option of options) {
      option.remove();
    }

    Account.list(User.current(), (err, response) => {
      const accountsList = response.data;
      const selectBody = this.element.querySelector(".accounts-select");
      for(let account of accountsList) {
        selectBody.insertAdjacentHTML('beforeend', `<option value="${account.id}">${account.name}</option>`);
      }
    })
  }


  onSubmit( options ) {
    Transaction.create(options, (err, response) => {
      if(response.success === true) {
        this.element.reset();
        App.update();
        if(this.element.id === "new-income-form") {
          const incomeModal = new Modal(App.getModal('newIncome').element);
          incomeModal.close();
          console.log(options);
          console.log(response);
        } else {
          const expenseModal = new Modal(App.getModal('newExpense').element);
          expenseModal.close();
        }
 
      } else {
        alert(`Ошибка создания транзакции`);
      }
      })
  }
}
