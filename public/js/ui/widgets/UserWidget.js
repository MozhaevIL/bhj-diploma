
class UserWidget {

  constructor( element ) {
    if(element) {
      this.element = element;
  } else {
    console.log("элемент не найден");
  }
}


  update() {
    const userName = this.element.querySelector('.user-name')
    userName.textContent = User.current().user.name;
  }
}
