class Entity {

  static url = "";

  static list(data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
  }
  ) {
    const options = {
      data: data,
      url: this.url,
      method: "GET",
      callback: callback
    }
    createRequest(options);
  }


  static create
    (data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
  }) {
      const modifiedData = Object.assign({ _method: 'PUT' }, data);
      const options = {
      data: modifiedData,
      url: this.url,
      callback: callback
    }

    createRequest(options);

  }


  static get(id, data, callback = (err, response) => {
  }) {
    const options = {
      data: data,
      url: this.url,
      id: id,
      method: "GET",
      callback: callback
    }

    createRequest(options);
  }


  static remove(id, data, callback = (err, response) => { 
    console.log(err);
    console.log(response);
  }) {
    const modifiedData = Object.assign({ _method: 'DELETE', id: id}, data);
    const options = {
      data: modifiedData,
      url: this.url,
      id: id,
      callback: callback
    }

    createRequest(options);
  }
  
}

