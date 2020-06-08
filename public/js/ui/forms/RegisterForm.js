
class RegisterForm extends AsyncForm {

  onSubmit(options) {
    User.register(options, (err, response) => { 
     console.log(err);
     console.log(response);
     if(response.success === true) {
       User.setCurrent(response);
       App.setState( 'user-logged');
       this.element.reset();
       const registerModal = new Modal(App.getModal('register').element);
       registerModal.close();

     } else {
       alert(`Ошибка регистрации.\n${response.error.email}`);
     }
     })
  }

}
