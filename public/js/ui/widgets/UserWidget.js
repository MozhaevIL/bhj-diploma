
class UserWidget {

  constructor( element ) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
    
    this.element = element;
  
}


  update() {
    const userName = this.element.querySelector('.user-name');
    const currentUser = User.current();

    if(currentUser) {
      userName.textContent = currentUser.name;
    }
  }
}
