
class CreateAccountForm extends AsyncForm {

  onSubmit( options ) {
    Account.create(options, (err, response) => {
      if(response && response.success) {
        App.getModal("createAccount").close();
        this.element.reset();
        App.update();
 
      } else {
        console.log(`Не удалось создать счет`);
      }
      })
  }
}
