let getKeyByValue = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value)
}

let getTodayFormInputDate = () => {
    let today = new Date()

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let dateString = year + '-' + month  + '-' + day;

    return dateString
}

export { getKeyByValue, getTodayFormInputDate}