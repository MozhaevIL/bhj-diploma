const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest;
    
    let data = options.data || {}; 
    let url = options.url;
    let formData, method;   

    xhr.withCredentials = true;    
    xhr.responseType = "json";
 
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);




    if(options.method === "GET") {
        method = "GET";
        let requestString;
        if(dataKeys.length > 0) {
            requestString = `?${dataKeys[0]}=${dataValues[0]}`
            for(let i=1; i < dataKeys.length-1; i++) {
                requestString+= `&${dataKeys[i]}=${dataValues[i]}`
            }
        } else {
            requestString = "";
        }
        
        url += requestString;



    } else {
        method = 'POST';
        formData = new FormData();
            for(let i=0; i < dataKeys.length; i++) {
                formData.append(dataKeys[i], dataValues[i]);
            
        }
    }

    xhr.open(method, url);
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        let err = xhr.statusText;
        const response = xhr.response;
        if (xhr.readyState === 4 && xhr.status === 200) {
            err = null;
            options.callback(err, response);
        } else {
           options.callback(err, response);
        }

    })
};
