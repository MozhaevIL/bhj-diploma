class AsyncForm {

  constructor( element ) {
      if(element) {
        this.element = element;
        this.registerEvents();
    } else {
      console.log("элемент не найден");
    }
  }
  



  registerEvents() {
    this.element.addEventListener('submit', (evt)=> {
      evt.preventDefault();
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
    console.log(data);
    return data;
  }

  onSubmit(options ) {

  }

  submit() {
    this.onSubmit(this.getData())
  }
}
