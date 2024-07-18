import React from 'react';
import Square from './Square';
import ButtonArea from './ButtonArea';
import { useState } from 'react';

function Layout(props) {
    
    const [divList, setDivList] = useState([]);
    //css
    const div_style = {
        float: 'left',
        width : '80px',
        height : '50px',
        margin : '10px 15px'
    };

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
    };

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
    
    /*
        props란 페이지에서 사용하는 component에
        값을 전달하기 위해서 사용하는 속성들을 통틀어서 props라고 한다
        component에 속성처럼 이름을 부여하고, 해당 이름에 변수 또는 함수를 전달하여
        컴포넌트에 값을 전달가능하다

    */
    return (
        <div>
            <Square list={divList}></Square>
            <ButtonArea add={addArea} minus={deleteArea}></ButtonArea>
        </div>
    );
}

export default Layout;