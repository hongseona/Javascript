const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

// const schedule = [
//     {time: '09:00', todo: '수업'},
//     {time: '11:00', todo: '과제'},
//     {time: '12:30', todo: '점심식사'},
//     {time: '14:00', todo: '주간회의'},
//     {time: '16:45', todo: '자료조사'}
// ]
/*
    위의 2개의 배열을 객체 배열 1개로 변경.
    {time: '09:00', todo: '과제'} ->must
*/
// 비어있는 배열에 새로운 요소를 추가 : push() 메소드 활용
const schedule = []
for (let i = 0; i < time.length; i++) {
    let newItem = { time: time[i], todo: todo[i] }
    // 속성이름 : 값
    schedule.push(newItem)
}

function printRow(must) {
    const tr = document.createElement('tr')
    for (let key in must) {      // 객체의 모든 과정을 순회
        const td = document.createElement('td')
        td.textContent = must[key]      // 속성 이름 key에 저장. key 속성의 값을 가져옴.
        // key는 순서대로 'time'->'todo'
        tr.appendChild(td)
    }
    return tr
}


// DOMContentLoaded => .html 폴더에 defer 속성을 넣지 않더라도 실행되게끔. (데이터가 만들어진 후 실행되게 작동)
document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root')
    const table = document.createElement('table')
    table.innerHTML =
        `<tr>
    <th>시간</th>
    <th>할일</th>
    </tr>`

    root.appendChild(table)
    schedule.forEach(must => {
        const trResult = printRow(must)
        table.appendChild(trResult)

    });

    // 'DOMContentLoaded' 이벤트 사용할 때에는 모든 이벤트 리스너를 
    // 'DOMContentLoaded' 이벤트 안에 작성합니다.
    const newBtn = document.getElementById('newBtn')
    newBtn.addEventListener('click', () => {
        //입력값 가져와서 newItem 객체 만들기
        const newTime = document.getElementById('newTime').value
        const newTodo = document.getElementById('newTodo').value
        const newItem = { time: newTime, todo: newTodo }        //새로운 일정 객체 생성
        // printRow 실행하여 tr 전달 받기 - 새로운 일정 tr (행) 만들기
        const newTr = printRow(newItem)

        schedule.push(newItem)      //스케줄 배열에 새로운 일정 추가

        // 스케줄 배열을 time 속성 순서로 정렬(난이도:최상)
        schedule.sort((a, b) => a.time.localeCompare(b.time))
        //  ㄴ a,b 는 2개의 객체. 2개의 객체 time 속성비교.
        //  ㄴ a.todo.lacaleCompare(b.todo) 는 todo 속성값으로 정렬

        // tr을 table에 추가 -> 정렬된 schedule 배열로 table 다시 만들기
        table.appendChild(newTr)    // ?? 🔑mission -> 스케줄 추가에 따라 브라우저도 변경되게


        console.log('새 스케줄 추가 후: ', schedule)
    })      // newBtn.addEventListner 의 끝

}) // document.addEventListner 의 끝