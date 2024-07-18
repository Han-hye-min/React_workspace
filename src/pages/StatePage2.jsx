import React, { useState } from "react";

function StatePage2(props) {

    const [count, setCount] = useState(0);

    const add = () => {
        // count = count + 1;
        setCount(count+1)
        console.log('더하기 : ' + count)
    }
    const minus = () => {
        // count = count - 1;
        setCount(count-1)
        console.log('빼기 : ' + count)
    }
    return (
        <div>
            <div><h1>{count}</h1></div>
            <div>
                <button type='button' onClick={add}>더하기</button>
                <button type='button' onClick={minus}>빼기</button>
            </div>
        </div>
    );
}

export default StatePage2;