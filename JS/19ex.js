// 객체의 배열 = 배열의 요소는 객체
// item : 하단 데이터들
const members = [
    {
        name: "김사나",
        age: 22,
        address: "경기",
        height: 160.9
    },
    {
        name: "박모모",
        age: "24",
        address: "서울",
        height: 165.3
    },
    {
        name: "이다현",
        age: 27,
        address: "제주",
        height: 163.7
    }
]

function printRow(item) {         // '하나씩 가져온' 요소를 item 변수에 저장-> tr 요소를 만들기
    const tr = document.createElement('tr')
    for (let key in item) {       //객체의 모든 속성을 순회
        // console.log(item[key])
        const td = document.createElement('td')
        td.textContent = item[key]
        tr.appendChild(td)
    }
    return tr
}
// DOMcontentLoaded 이벤트: DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
//              ㄴ 화면의 구성 요소들이 만들어진 후에 실행.
document.addEventListener('DOMContentLoaded', function () {
    // html 의 최상위 요소 가져오기
    const root = document.getElementById('root')
    // table 요소를 만들어서 첫번째 줄(tr)에 제목을 넣어 table에 추가
    const table = document.createElement('table')
    table.innerHTML = `<tr>
    <th>이름</th>
    <th>나이</th>
    <th>거주지</th>
    <th>키</th>
    </tr> `
    // table 을 root 요소에 추가하기
    root.appendChild(table)
    // 배열에 저장된 객체 요소 각각에 대해 반복하는 메소드
    members.forEach(item => {
        // item 객체로 tr요소 만드는 함수 호출
        const trResult = printRow(item)
        // console.log(trResult)
        table.appendChild(trResult)
    })
})

