
class AccountsWidget {

  constructor( element ) {
    if (!element) {
      throw new Error("Элемент не найден");
    }
    
    this.element = element;
    this.update();      
    this.registerEvents();
  
}


  registerEvents() {
    this.element.addEventListener("click", (evt) => {
      const target = evt.target;

      if(target.closest(".account")) {
        this.onSelectAccount(target.closest(".account"));

      } else if (target.closest(".create-account")) {
        App.getModal("createAccount").open();
      }
    }
    )
  }


  update() {
    if(User.current()) {
      Account.list(User.current(), (err, response)=>{
        if(response && response.success) {
          const accountsArray = response.data;        
          this.clear();
          for(let account of accountsArray) {
            this.renderItem(account);            
          }
        
          
        } else {
          console.log(err);
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
     const lastActiveItem = document.querySelector(".active");
     if(lastActiveItem) {
       lastActiveItem.classList.remove("active");
     }
     
     element.classList.add("active");
     const options = {};
     options.account_id = element.dataset.id;
     App.showPage('transactions', options);
    }
  


  getAccountHTML( item ) {
    return `
    <li class="account" data-id="${item.id}">
      <a href="#">
          <span>${item.name}</span> /
          <span>${item.sum} ₽</span>
      </a>
    </li>
    `
  }


  renderItem( item ) {
    this.element.insertAdjacentHTML('beforeend', this.getAccountHTML(item));

  }
}
