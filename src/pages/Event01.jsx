import React from 'react';

function Event01(props) {
    //이벤트 함수는 대체로 익명함수처리
    // const clickButton = function(){

    // }
    const clickButton1= () => {
        alert('버튼을 눌렀습니다.' )
    }
    const clickButton2 = (value) => {
        alert('버튼을 눌렀습니다 : ' + value)
    }
    //이벤트 처리할 때 주의 해야할 점 -> 파라메터가 있을 때와 없을 때 차이점
    //만약 속성 onClick에 파라미터를 부여하고 싶다면 익명함수를 사용하여 콜백해서 이벤트를 실행하게끔 만든다.
    //아래 코드는 한줄 코드 이기 때문에 return과 중괄호를 생략해서 사용한다.
    return (
        <div>
            <button type='button' onClick={ clickButton1 }>파라메터 없음</button>
            <button type='button' onClick={ () => clickButton2(10)}>파라메터 있음</button>
        </div>
    );
}

export default Event01;