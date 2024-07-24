import React from 'react';
import {useState, useRef} from 'react';

function UseRefExam02(props) {

    const [count, setCount] = useState(0);
    //컴포넌트가 re-rendering 되더라도, 기존 값을 유지할 수 있음
    //저장의 기능을 가진다 
    let value = useRef(0);

    //함수가 다시 호출된다
    console.log('랜더링 ..');
    console.log(value);

    const addCount = (e) => {
        setCount(count + 1);
        console.log('count', count+1);
    }
    const addValue = (e) => {
        value.current = value.current+1;
        console.log('value', value.current);
    }
    return (
        <div>
            <p>value : {value.current} </p>
            <p>count : {count}</p>
            <button onClick={addCount}>카운트 증가</button>
            <button onClick={addValue}>값 증가</button>
        </div>
    );
}

export default UseRefExam02;