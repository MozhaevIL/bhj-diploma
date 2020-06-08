
class AccountsWidget {

  constructor( element ) {
    if(element) {
      this.element = element;
      this.update();      
      this.registerEvents();
  } else {
    console.log("элемент не найден");
  }
}


  registerEvents() {
    const createAccountButton = document.querySelector(".create-account");
    createAccountButton.addEventListener("click", (evt) => {
      const createAccountModal = new Modal(App.getModal("createAccount").element);
      createAccountModal.open();
    })

    const widget = this.element;
    widget.addEventListener("click", (evt) => {
      let target = evt.target;
      if (target.tagName === "A" || target.tagName === "SPAN") {
        this.onSelectAccount(target);
      }
    })

  }


  update() {
    if(User.current()) {
      Account.list(User.current(), (err, response)=>{
        if(response.success) {
          const accountsArray = response.data;        
          this.clear();
          for(let account of accountsArray) {
            this.renderItem(account);            
          }
        
          
        } else {
          console.log("не удалось загрузить список счетов")
        }
      });
    }
  }


  clear() {
    const accounts = Array.from(this.element.querySelectorAll(".account"));
    for(let account of accounts) {
      account.remove();
    }

  }


   onSelectAccount(element) {
     const accountItem = element.closest("li");
     const activeItems = Array.from(document.querySelectorAll(".active"));
     for(let activeItem of activeItems) {
       activeItem.classList.remove("active");
     }
     accountItem.classList.add("active");
     const options = {};
     options.account_id = accountItem.dataset.id;
     App.showPage('transactions', options);
    }
  


  getAccountHTML( item ) {
    const accountHTML = `
    <li class="account" data-id="${item.id}">
      <a href="#">
          <span>${item.name}</span> /
          <span>${item.sum} ₽</span>
      </a>
    </li>
    `
    return accountHTML;
  }


  renderItem( item ) {
    this.element.insertAdjacentHTML('beforeend', this.getAccountHTML(item));

  }
}
