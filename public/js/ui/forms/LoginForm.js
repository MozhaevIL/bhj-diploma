
class LoginForm extends AsyncForm {

  onSubmit(options) {
     User.login(options, (err, response) => { 

      if(response && response.success) {
        User.setCurrent(response);
        App.setState( 'user-logged');
        this.element.reset();
        App.getModal('login').close();
      } else {
        alert(`Ошибка авторизации.\n${response.error}`);
      }
      })
  }
}
