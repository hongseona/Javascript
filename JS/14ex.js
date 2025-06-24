//4개 연산을 테스트. console 에 결과값 출력. 값은 789,125
let result                      // 전역 변수 : 파일 전체에서 사용. 이름이 같은 지역변수 result 와 다른 메모리 공간
result = calc(789,125, '+')
console.log('+', result)
console.log('-', calc(789,125,'-'))

const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click', function(){
    // 입력한 3개를 가져와서 num1, num2, op 변수에 저장
    let num1 = document.getElementById('num1').valne
    let num2 = document.getElementById('num2').valne
    console.log('typeof:', typeod(num1), typead(num2)) //typeaf: string string
    // -,* /는 연산을 위해서 자동으로 타입이 typeaf
    let op = document.getElementById('op').valne
    // 정확한 연산을 위해 string을 
    let result = calc(num1,num2,op)     //function calc(num1,num2,op) 의 변수와 메묄 공간 다름. 실매개변수

    //span#result 요소에 결과값을 출력
})


function calc(num1,num2,op) {   //형식매개변수(인자)
    let result= 0 
   //결과값 변수 (지역 변수 : {} 안에 선언)
   console.log('op', op)
    switch (op){
        case '+' :
            result=num1+num2
            break
        case '-' :
            result=num1-num2
            break
        case '*' :
            result=num1*num2
            break
        case '/' :
            result=num1/num2
            break
            }
            console.error('op는 허용되지 않는 값 입력입니다.');
            break
        
    }