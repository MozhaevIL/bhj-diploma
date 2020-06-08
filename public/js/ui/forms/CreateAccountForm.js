
class CreateAccountForm extends AsyncForm {

  onSubmit( options ) {
    Account.create(options, (err, response) => { 
      console.log(err);
      console.log(response);
      if(response.success === true) {
        const createAccountModal = new Modal(App.getModal("createAccount").element);
        createAccountModal.close();
        this.element.reset();
        App.update();
 
      } else {
        console.log(`Не удалось создать счет`);
      }
      })
  }
}
