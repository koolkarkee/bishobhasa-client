import moment from 'moment'

function getFormattedDateTime(datetime) { 
    return moment(datetime).format('YYYY MMMM Do h:mm:ss a')   
}

export default {
    getFormattedDateTime
}