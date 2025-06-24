//함수의 기본 형식
//             데이터 입력 --> 함수(실행) --> 실행 결과 출력
//              (인자,인수)                     (리턴)
//  let ele = members.pop() : 입력값 없고, 출력은 ele 변수에 저장
//  let size = members.push('사나') : 입력값 '사나', 출력은 size 변수에 저장

//함수 유형 1: 인자 없다. 리턴 없다.
function add(){
    console.log(100+1000)
}
add()
add()
add()

//함수 유형 1: 인자 없다. 리턴 있다.
function sub(){
    return 100-1000;    //함수
}

let result = sub()      //함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈', result)
console.log('뺄셈', sub())

//함수 유형 1: 인자 있다. 리턴 없다.
function muliply(num1,num2){ 
    // num1, num2 : 함수 실행시 사용자가 정한 입력값을 저장하는 변수
    console.log('num1*num2 :', num1*num2)
}
muliply(23,56)  //1288  //23,56 은 함수 실행에 필요한 입력값
muliply(111,23)  //2553

//함수 유형 1: 인자 있다. 리턴 있다.
function div(num1,num2){
    return num1/num2
}
result = div (77,13)
console.log('나누기:', result)
console.log('나누기:', div(77,13))
console.log('나눈 결과 소수점:', result.toFixed(3))