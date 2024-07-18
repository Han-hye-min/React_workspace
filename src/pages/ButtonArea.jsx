import React from 'react';

function ButtonArea(props) {
    return (
        <div>
            <button type='button' onClick={props.add}>추가</button>
            <button type='button' onClick={props.minus}>삭제</button>
        </div>
    );
}

export default ButtonArea;