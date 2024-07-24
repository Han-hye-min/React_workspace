import React from 'react';
import { useState } from 'react';
import TimerPage from './TimerPage';

function TimerMainPage(props) {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <TimerPage/>}
            <button type='button' onClick={()=> setShowTimer(!showTimer)}>Togle Timer</button>
        </div>
    );
}

export default TimerMainPage;