add()
add()
add()

let result = sub()      //함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈', result)
console.log('뺄셈', sub())

muliply(23,56)  //1288  //23,56 은 함수 실행에 필요한 입력값
muliply(111,23)  //2553

result = div (77,13)
console.log('나누기:', result)
console.log('나누기:', div(77,13))
console.log('나눈 결과 소수점:', result.toFixed(3))

//함수 정의  = 함수 호이스팅(끌어올리기) 가능한 것은 funtion 사용할때만 가능
function add(){
    console.log(100+1000)
}
function sub(){
    return 100-1000;    //함수
}
function muliply(num1,num2){ 
    console.log('num1*num2 :', num1*num2)
}
function div(num1,num2){
    return num1/num2
}