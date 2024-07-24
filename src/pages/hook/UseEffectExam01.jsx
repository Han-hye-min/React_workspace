import React from 'react';
import {useState} from 'react';
import { useEffect} from 'react';

function UseEffectExam01(props) {
    const [count, setCount] = useState(0);
    const [money, setMoney] = useState(0);
    const [result, setResult] = useState(0);

    //useEffect > 랜더링 될 때마다 호출
    useEffect(() => {
        console.log('랜더링1');

    });

    //useEffect > 처음 랜더링 될 때만 호출
    useEffect(() => {
        console.log('랜더링2');
    }, []); //의존성을 빈값으로 둔다

    //useEffect > 특정 값이 갱신 될 때 실행
    useEffect(() => {
        console.log('랜더링3');
    }, [result]); //부여된 의존성 값이 갱신될 때 실행된다

    const updateCount = (e) => {
        setCount(count + 1);
        console.log('count : ' + (count+1));
    }

    const updateMoney = (e) => {
        setResult(money);
        console.log('money : ' + money);
    }

    const inputMoney = (e) => {
        setMoney(e.target.value);
    }
    return (
        <div>
            <button type='button' onClick={updateCount}>카운트 증가</button>
            <div>
                <input type='text' name="money" onChange={inputMoney} value={money}></input>
                <button type='button' onClick={updateMoney}>계산</button>
            </div>
        </div>
    );
}

export default UseEffectExam01;