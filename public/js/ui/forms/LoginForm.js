
class LoginForm extends AsyncForm {

  onSubmit(options) {
     User.login(options, (err, response) => { 

      if(response && response.success === true) {
        User.setCurrent(response);
        App.setState( 'user-logged');
        this.element.reset();
        const loginModal = new Modal(App.getModal('login').element);
        loginModal.close();

      } else {
        alert(`Ошибка авторизации.\n${response.error}`);
      }
      })
  }
}
