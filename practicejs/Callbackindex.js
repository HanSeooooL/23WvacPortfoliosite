//Callback
//JavaScript의 비동기 처리는 기본적으로 브라우저의 이벤트 루프가 동기식 처리를 우선으로 진행한다.

const fs = require('fs')
console.log(getText());

function getText() {
    let str = 'original';

    //비동기 방식으로 파일을 읽어오는 함수
    fs.readFile('./text_1.txt', (err, data) => {
        if(err) {
            return console.error(err);
        } str = data.toString()
    })

    return str;
    //브라우저는 동기식을 우선으로 처리하므로, 위의 readFile함수는 getText() 함수가 실행 완료 된 후 진행된다.
    //따라서, 이 함수에서 반환값은 original이다.
}
getText()

//Callback을 활용한 비동기처리
function getText2(callback) {
    fs.readFile('./text_1.txt', (err,data) => {
        if(err) {
            return console.error(err)
        }

        if(data.toString() === '') {
            callback(new Error('file data is empty'));
        } else {
            callback(null, data.toString())
        }
    })
}

function test() {
    //하지만 결론적으로 비동기 함수기 때문에 외부에서는 가장 늦게 처리된다.
    //이 현상을 해결하기 위해 콜백을 복잡하게 늘렸을 때 콜백 지옥이 나타난다.
    getText2((err, data) => {
        if(err) {
            return console.error(err);
        }
        console.log(data);
    })
    console.log('실행 후')
}

//콜백지옥
function callbackHell() {
    fs.readFile('./text_1.txt', (err, data) => {
        if(err) {
            console.error(err);
        }
        console.log(data.toString());

        fs.readFile('./text_2.txt', (err, data) => {
            if(err) {
                console.error(err);
            }
            console.log(data.toString());

            fs.readFile('./text_3.txt', (err, data) => {
                if(err) {
                    console.error(err);
                }
                console.log(data.toString());
            })
        })
    })
}

callbackHell()

//이것을 해결하기 위헤 promise가 사용됨