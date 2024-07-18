import React, { useState } from "react";

function StatePage3(props) {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const changeNumber = (e) =>{
        setInputValue(Number(e.target.value));
    }
    const add = () => {
        // count = count + 1;
        setCount(count+inputValue)
        console.log('더하기 : ' + count)
    }
    const minus = () => {
        // count = count - 1;
        setCount(count-inputValue)
        console.log('빼기 : ' + count)
    }
    return (
        <div>
            <div><h1>{count}</h1></div>
            <div><input type="number" value={inputValue} onChange={(e) => changeNumber(e) }></input></div>
            <div>
                <button type='button' onClick={add}>더하기</button>
                <button type='button' onClick={minus}>빼기</button>
            </div>
        </div>
    );
}

export default StatePage3;