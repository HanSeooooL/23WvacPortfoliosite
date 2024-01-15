//async await
//기존의 처리 방식의 문제점들을 보완한 방식
//자바스크립트의 비동기 방식 계보
//Callback -> promise - > async,await


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
})

myPromise.then(n => {
    console.log(n)
})

let result
function p() {
    return new Promise((resolve, reject) => {
        resolve('hello')
    })
}

p().then((n) => console.log(n))
p().then(result)
console.log(result)


async function p2() {  
    setTimeout(() => {}, 1000);
    return 'hello'
}

p2().then((n) => console.log(n));