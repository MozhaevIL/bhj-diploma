const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest;
    let data = options.data;
    xhr.withCredentials = true;    
    xhr.responseType = "json";

    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);

    if(data) {
        let requestString = `?${dataKeys[0]}=${dataValues[0]}`
        for(let i=1; i < dataKeys.length-1; i++) {
            requestString+= `&${dataKeys[i]}=${dataValues[i]}`
        }
    }


    if(options.method === "GET") {
        if(dataKeys.length > 0) {
            let requestString = `?${dataKeys[0]}=${dataValues[0]}`
            for(let i=1; i < dataKeys.length; i++) {
                requestString+= `&${dataKeys[i]}=${dataValues[i]}`
            }
            xhr.open("GET", `${options.url}${requestString}`);
        } else {
            xhr.open("GET", `${options.url}`);
        }

        xhr.send();

    } else {
        let formData = new FormData();
        if(dataKeys.length > 0) {
            for(let i=0; i < dataKeys.length; i++) {
                formData.append(dataKeys[i], dataValues[i]);
            }
        }

        for (var value of formData.values()) {
         }

        xhr.open(`POST`, `${options.url}`);
        xhr.send(formData);
    }

    xhr.addEventListener('load', () => {
        const err = xhr.statusText;
        const response = xhr.response;
        if (this.readystate === xhr.Done && this.status === 200) {
            err = null;
            options.callback(response);
        } else {
           options.callback(err, response);
        }

    })
};
