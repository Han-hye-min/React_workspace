import React from 'react';

function Square(props) {
    return (
        <div>
            <div style={{width:'800px', height: '400px', overflow:'auto'}}>
                {
                    props.list.map((obj, index)=> (
                        obj
                    ))
                }
            </div>
        </div>
    );
}

export default Square;