import React from 'react';
import { useState } from 'react';

function Multinput(props) {
    //set~ 을 통해서 state값이 변경되면 화면이 다시 로딩된다
    const [inputs, setInputs] = useState({myName:'', myAge:''})

    //구조 분해 할당
    const {myName, myAge} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value //기존 inputs 복사 후 key 에 해당하는 value 업데이트
        })
    }
    return (
        <div>
            <div>
                <input type="text" name="myName" onChange={(e) => onChange(e)} placeholder='이름을 입력하세요'></input>
                <input type='text' name="myAge"onChange={(e) => onChange(e)} placeholder='나이를 입력하세요'></input>
            </div>
            <div> 이름 : {myName}, 나이 {myAge} </div>
        </div>
    );
}

export default Multinput;