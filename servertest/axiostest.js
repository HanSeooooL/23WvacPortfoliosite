const axios = require('axios')

const fetchData = async() => {
    try {
        const response = await axios({
            method: 'get',
            url: `/DB/selectProject`,
            baseURL: 'http://localhost:3001/api',
            timeout: 2000
        });

        return response
    } catch (e) {
        console.error(e);
    }
}

fetchData().then((result) => {
    console.log(result.data)
})