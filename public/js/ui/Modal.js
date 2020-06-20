
class Modal {

  constructor(element) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
   
    this.element = element;
    this.registerEvents();
  
}


  registerEvents() {
    const elmClose = this.element.querySelectorAll('[data-dismiss="modal"]');
    for(let elm of elmClose) {
      elm.addEventListener("click", (event) => {
        event.preventDefault();
        this.onClose();
      })
    }
  }


  onClose( e ) {
    this.close();
  }

  unregisterEvents() {
    const elmClose = this.element.querySelectorAll('[data-dismiss="modal"]');
    for(let elm of elmClose) {
      elm.removeEventListener("click", (event) => {
        event.preventDefault();
        this.onClose();
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
