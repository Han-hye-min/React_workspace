import React from 'react';
import {useState} from 'react';

function UseRefExam01(props) {
    const [count, setCount] = useState(0);
    
    let value = 0;

    console.log('랜더링 ..');

    const addCount = (e) => {
        setCount(count + 1);
        console.log('count', count+1);
    }
    const addValue = (e) => {
        value = value + 1;
        console.log('value', value);
    }
    return (
        <div>
            <p>value : {value}</p>
            <p>count : {count}</p>
            <button onClick={addCount}>카운트 증가</button>
            <button onClick={addValue}>값 증가</button>
        </div>
    );
}

export default UseRefExam01;