//Promise -> 약속
//상태: pending, fulfilled, rejected, settled
//resolve와 reject는 각각 성공했을때와 실패했을때를 의미
//함수에서의 리턴과 같이 resolve 혹은 reject가 사용됨 다만, 위의 서술과 같이 의미가 다름
//pending: promise 생성 후 완료 되기 전 상태
//settled: resolve()나 reject()함수가 호출되었을 때
//fulfilled: resolve()함수가 호출되었을때
//rejected: reject()함수가 호출되었을 때
//then() -> resolve처리
//catch() -> reject처리

const fs = require('fs')

function getText(path) {
    //Promise객체 반환
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,data) => {
            if(err || data.toString() === '') reject(new Error('no contents')); //실패
            resolve(data.toString());   //성공
        })
    })
}
getText('./text_1.txt').then(data => {
    console.log(data);
    getText('./text_2.txt').then(data => {
        console.log(data);
        getText('./text_3.txt').then(data => {
            console.log(data);
        }, (err) => console.error(err))
    }, (err) => console.error(err))
}, (err) => console.error(err));

//Promise chaining
getText('./text_1.txt').then(data => {
    console.log(data)
    return getText('./text_2.txt')
}).then(data => {   //앞 과정으로 반환된 promise객체에 대해 적용
    console.log(data)
    return getText('./text_3.txt')
}).then( data => console.log(data)) //앞 과정으로 반환된 promise객체에 대해 적용