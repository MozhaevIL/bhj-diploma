
class User {

  static url = "/user";

  static setCurrent(user) {
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
  }


  static unsetCurrent() {
    localStorage.removeItem("user");
  }


  static current() {
    localStorage.getItem("user");
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }


  static fetch(data, callback = (err, response) => { //доработать
    console.log(err);
    console.log(response);
    }
    ) {
      if(data) {
        const options = {
          data: data,
          url: `${this.url}/current`,
          method: "GET",
          callback: callback
        }
        createRequest(options);
      } else {
        console.log('Авторизованный пользователь не найден');
      }
 }



  static login( data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
    if(response.success === true) {
      this.setCurrent(response);
    } else {
      alert(`Ошибка авторизации.\n${response.error}`)
    }
    }
    ) {
      const options = {
        data: data,
        url: `${this.url}/login`,
        method: "POST",
        callback: callback
      }
      createRequest(options);
    }


  static register( data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
    if(response.success === true) {
      this.setCurrent(response);
    } else {
      alert(`Ошибка регистрации.\n${response.error.email}`)
    }
    }
    ) {
      const options = {
        data: data,
        url: `${this.url}/register`,
        method: "POST",
        callback: callback
      }
      createRequest(options);
    }


  static logout(data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
    if(response.success === true) {
      this.unsetCurrent();
    } else {
      console.log("Ошибка выхода. Попробуйте снова")
    }
  }
  ) {
    const options = {
    data: data,
    url: `${this.url}/logout`,
    method: "POST",
    callback: callback
    }
  createRequest(options);  
  }
}
