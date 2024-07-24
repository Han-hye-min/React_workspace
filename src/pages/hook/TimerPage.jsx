import React from 'react';
import { useEffect } from 'react';

function TimerPage(props) {

    useEffect( ()=> {
        const timer = setInterval( () => {
            console.log('타이머 실행 중');
        }, 1000);
    
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    }, []);

    //unmount 시 실행
    
    return (
        <div>
            <span>타이머가 실행됩니다!!</span>
        </div>
    );
}

export default TimerPage;