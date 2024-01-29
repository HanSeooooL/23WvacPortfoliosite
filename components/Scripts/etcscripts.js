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

let displaydegree = (degree) => {
    if(degree == 0) {
        return '학사'
    } else if (degree == 1) {
        return '석사'
    } else if (degree == 2) {
        return '박사'
    }
}

let displaystate = (state) => {
    if(state == 0) {
        return '졸업'
    } else if (state == 1) {
        return '수료'
    } else if (state == 2) {
        return '재학'
    } else if (state == 3) {
        return '중퇴'
    }
}

export { getKeyByValue, getTodayFormInputDate, displaydegree, displaystate}