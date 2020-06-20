
class User {

  static url = "/user";

  static setCurrent(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }


  static unsetCurrent() {
    localStorage.removeItem("user");
  }


  static current() {
    return JSON.parse(localStorage.getItem("user"));
  }


  static fetch(data, callback = (err, response) => {}
    ) {
      if(data) {
        const options = {
          data: data,
          url: `${this.url}/current`,
          method: "GET",
          callback: callback
        }
        createRequest(options);
      } 
 }



  static login( data, callback = (err, response) => {}
    ) {
      const options = {
        data: data,
        url: `${this.url}/login`,
        method: "POST",
        callback: callback
      }
      createRequest(options);
    }


  static register( data, callback = (err, response) => {}
    ) {
      const options = {
        data: data,
        url: `${this.url}/register`,
        method: "POST",
        callback: callback
      }
      createRequest(options);
    }


  static logout(data, callback = (err, response) => {}
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
