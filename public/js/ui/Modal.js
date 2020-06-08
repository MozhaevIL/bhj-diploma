
class Modal {

  constructor(element) {
    if(element) {
      this.element = element;
      this.registerEvents();
  } else {
    console.log("элемент не найден");
  }
}


  registerEvents() {
    const elmClose = this.element.querySelectorAll('[data-dismiss="modal"]');
    for(let elm of elmClose) {
      elm.addEventListener("click", (evt) => {
        this.onClose();
        evt.preventDefault();
      })
    }
  }


  onClose( e ) {
    this.close();
  }

  unregisterEvents() {
    const elmClose = this.element.querySelectorAll('[data-dismiss="modal"]');
    for(let elm of elmClose) {
      elm.removeEventListener("click", (evt) => {
        this.onClose();
        evt.preventDefault();
      })
    }
  }

  open() {
    this.element.style.display = "block";
  }

  close(){
    
    this.element.style.display = "";

  }
}
