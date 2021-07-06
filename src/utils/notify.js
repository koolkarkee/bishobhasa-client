import { toast } from 'react-toastify'

function showSuccess(msg) { 
    toast.success(msg)
}

function showInfo(msg) {
    toast.info(msg)
}

function showWarning(msg) {
    toast.warn(msg)
}

//generic function to handle error
function handleError(error) { 
    let defaultMessage = 'something went wrong'

    if(error){
        defaultMessage = error.msg 
    }

    //show them in UI
    showError(defaultMessage)
}

function showError(msg) {
    toast.error(msg)
}

export default {
    showSuccess,
    showInfo,
    showWarning,
    handleError
}