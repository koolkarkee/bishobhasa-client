/* eslint-disable */
const regexUsername = /^[a-z0-9]+$/i //for alphanumeric
const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ //for email

function validateUsernameRegex(value){
    return regexUsername.test(value)
}

function validateEmailRegex(value){
    return regexEmail.test(value) 
}

function validate(fieldName, value){
    let errMsg
    switch (fieldName) {
        case 'username':
            errMsg = value
                    ? value.length > 5 
                        ? value.length < 31 
                            ? validateUsernameRegex(value) 
                                ? ''
                                : `*${fieldName} should only contain alphabet and numerics`
                            : `*${fieldName} must not exceed 30 characters`
                        : `*${fieldName} must be at least 6 characters`
                    : `*${fieldName} is required`
            break;
        case 'password':
                errMsg = value 
                        ? value.length < 6
                            ? '*weak password'
                            : value.length > 25
                                ? `*${fieldName} must not exceed 25 characters`
                                : ''
                        : `*${fieldName} is required`
                break;
        case 'email':
                errMsg = value 
                    ? value.length > 60 
                        ? `*${fieldName} must not exceed 60 characters`
                        : validateEmailRegex(value) 
                            ? ''
                            : `*invalid ${fieldName} pattern`
                    : `*${fieldName} is required`
            break;
        default:
            break;
    }
    return errMsg
}

module.exports = {
    validate
}