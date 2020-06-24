class CreateTransactionForm extends AsyncForm {

  constructor(element) {
    super(element);
    this.renderAccountsList();
  }


  renderAccountsList() {  
    if(User.current()) {
     Account.list(User.current(), (err, response) => {
        if(response && response.success) {
         const accountsList = response.data;
         const selectBody = this.element.querySelector(".accounts-select");
          selectBody.innerHTML = "";
          for(let account of accountsList) {
            selectBody.insertAdjacentHTML('beforeend', `<option value="${account.id}">${account.name}</option>`);
          }
        }
      })
    }
  }


  onSubmit( options ) {
    Transaction.create(options, (err, response) => {
      if(response && response.success) {
        this.element.reset();
        App.update();
        if(this.element.id === "new-income-form") {
          App.getModal('newIncome').close();
        } else {
          App.getModal('newExpense').close();
        }
 
      } else {
        alert(`Ошибка создания транзакции`);
      }
      })
  }
}
