import axios from 'axios'

//axios base instance
const Http = axios.create({
    baseURL : process.env.REACT_APP_BASE_URL, 
    responseType : 'json'
}) 

const TokenPrefix = process.env.REACT_APP_BASE_TOKEN_PREFIX

const GetHeaders = (isSecure = false) => {  
    let options = {'Content-Type' : 'application/json'}
    if(isSecure){
        options['Authorization'] = TokenPrefix + localStorage.getItem('token')
    }
    
    console.log('token  now >> ', options['Authorization']);
    
    return options
}

const defaultErrMsg = { msg : 'An Error has occured while performing operation. Please try again later.' } 

function get(url, { params = {} } = {}, isSecure = false) {
    return new Promise((resolve, reject) => {
        Http
            .get(url, {
                params,
                headers : GetHeaders(isSecure) 
            })
            .then(response => {
                console.log('data inside response of get request >> ', response.data)
                resolve(response.data)
            })
            .catch(err => {  
                //console.log('err inside get request >> ', err)   
                if(!err.response)  
                    reject(defaultErrMsg)    
                else 
                    reject(err.response.data) 
            }) 
    }) 
}

function checkUniqueKeyError(err, reject){
    console.log('duplicate >> ', err.response.data.msg);
                
    if(err.response.data.msg){
        if(err.response.data.msg.code === 11000){
            let dupmsg = err.response.data.msg.keyValue
            console.log('duplicate msg 1 >> ', dupmsg)
            console.log('dupmsg 2 >>', Object.keys(dupmsg))

            let DuplicateMessage = Object.keys(dupmsg)
            
            reject({
                msg : `Record already exists.
                       Please Enter a unique value at ${DuplicateMessage}` 
            })
        } 
    }
}

function post(url, data = {}, { params = {} } = {}, isSecure = false) {
    return new Promise((resolve, reject) => {
        Http
            .post(url, data, {
                params,
                headers : GetHeaders(isSecure)
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                if(!err.response)  
                     reject(defaultErrMsg)    
                else {
                    checkUniqueKeyError(err, reject) 
                    reject(err.response.data)
                } 
            })
    }) 
}

function remove(url, isSecure = false) {
    return Http
            .delete(url, {
                headers : GetHeaders(isSecure)
            })
}

function update(url, data = {}, { params = {} } = {}, isSecure = false) {
    return new Promise((resolve, reject) => {
        Http
            .put(url, data, {
                params,
                headers : GetHeaders(isSecure)
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                if(!err.response)  
                     reject(defaultErrMsg)    
                else {
                    checkUniqueKeyError(err, reject) 
                    reject(err.response.data)
                }  
            }) 
    }) 
}

export const httpClient =  {
    get,
    post,
    remove,
    update
}