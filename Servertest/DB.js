async function fetchTest() {
    let res = await fetch('http://localhost:3003/api/DB/selectProject?ID=4')
    res = await res.json()
    console.log(res[0])
}

fetchTest()