class Sidebar {

  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    const sidebar = document.querySelector(".sidebar-mini");
    const sidebarToggleButton = document.querySelector(".sidebar-toggle");
    sidebarToggleButton.addEventListener("click", (evt) => {
      sidebar.classList.toggle("sidebar-open");
      sidebar.classList.toggle("sidebar-collapse");
      evt.preventDefault();
    })
    

  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const loginButton = document.querySelector('.menu-item_login');
    loginButton.addEventListener('click', ()=>{
      const loginModal = new Modal(App.getModal('login').element);
      loginModal.open();
    })
 
  const registerButton = document.querySelector('.menu-item_register');
  registerButton.addEventListener('click', ()=>{
    const registerModal = new Modal(App.getModal('register').element);
    registerModal.open();
  })

  const logoutButton = document.querySelector('.menu-item_logout');
  logoutButton.addEventListener('click', ()=>{
    User.logout(User.current(), (err, response) => { 
      if(response.success === true) {
        User.unsetCurrent();
        App.setState('init');
      } else {
        console.log("Ошибка. Повторите выход")
      };
    });

  })
}

}
