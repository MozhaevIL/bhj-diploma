
class RegisterForm extends AsyncForm {

  onSubmit(options) {
    User.register(options, (err, response) => { 
     console.log(err);
     console.log(response);
     if(response && response.success) {
       User.setCurrent(response);
       App.setState( 'user-logged');
       this.element.reset();
       App.getModal('register').close();

     } else {
       alert(`Ошибка регистрации.\n${response.error.email}`);
     }
     })
  }

}
