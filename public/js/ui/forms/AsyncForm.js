class AsyncForm {

  constructor(element) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
  
    this.element = element; 
    this.registerEvents();
  }
  



  registerEvents() {
    this.element.addEventListener('submit', (event)=> {
      event.preventDefault();
      this.submit();
    })
  }


  getData() {
    let formData = new FormData(this.element),
    entries = formData.entries();
    let data = {};

    for (let item of entries) {
      const key = item[ 0 ],
      value = item[ 1 ];
      data[key] = value;
    }
    return data;
  }

  onSubmit(options ) {

  }

  submit() {
    this.onSubmit(this.getData())
  }
}
