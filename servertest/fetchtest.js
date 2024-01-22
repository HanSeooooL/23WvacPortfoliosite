async function test() {
    let response = await fetch('http://localhost:300/api/DB/selectProject?ID=4')
    response = response.json()
    return response
}

let result
test()
.then((res) => {
    result = res
    console.log(result)
})