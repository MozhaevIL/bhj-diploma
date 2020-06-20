
class UserWidget {

  constructor( element ) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
    
    this.element = element;
  
}


  update() {
    const userName = this.element.querySelector('.user-name');
    if(localStorage.getItem("user")) {
      userName.textContent = User.current().user.name;
    }
  }
}
