import React from 'react';
import { useState } from 'react';

function MakArea(props) {
    const [divList, setDivList] = useState([]);
    
    //css
    const div_style = {
        float: 'left',
        width : '80px',
        height : '50px',
        margin : '10px 15px'
    }

    //랜덤으로 색 만드는 함수
    function makeColor() {
        const colors=[];
        colors.push('#');
        for(let i=0; i< 3; i++){
            let color = Math.floor(Math.random() * 256).toString(16); //0~255 사이 값을 16진수로 변환
            if(color.length===1){
                color = '0' + color;
            }
            colors.push(color);
        }
        return colors.join('');
    }

    const addArea =()=> {
        const color=makeColor();
        div_style.backgroundColor =color;
        const newArea = [...divList, <div key={divList.length+1} style={div_style}></div>];
        setDivList(newArea)
        console.log(divList)
    }

    const deleteArea = () => {
        // 리스트를 한개씩 감소
        //pop() : 마지막 요소를 반환 후 삭제
        //shift() : 첫 번째 요소를 반환 후 삭제
        //splice(시작위치, 개수) : 삭제 또는 삽입, 원본데이터 연결
        //slice(시작위치, 끝) : 삭제 -> 원본데이터는 변경되지 않음
        divList.pop();
        const newArea = [...divList];
        setDivList(newArea);
    };

    return (
        <div>
            <section>
            <div>
                <button type='button' onClick={addArea}>추가</button>
                <button type='button' onClick={deleteArea}>삭제</button>
            </div>
            <div style={{width:'800px', height: '400px', overflow:'auto'}}>
                {
                    divList.map((obj, index)=> (
                        obj
                    ))
                }
            </div>

            </section>
        </div>
    );
}

export default MakArea;