import React from 'react';
import '../assets/table.css';

function Table(props) {
    const divCss = {
        width : '800px',
        height : '400px',
        margin : '0 auto',
        backgroundColor : '#eeaaff'
    }
    return (
        <div>
            <div  style={divCss}>
                <table className='cs-table'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>홍길동</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>김철수</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>김영희</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;