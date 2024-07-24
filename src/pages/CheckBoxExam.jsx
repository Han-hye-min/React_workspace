import React, { Fragment, useState } from 'react';

function CheckBoxExam(props) {
    const [checkItems, setCheckItems] = useState({});
    const [submit, setSubmit] = useState(false);

    const changeCheckbox= (e)=> {
        setCheckItems(
            {...checkItems, 
                [e.target.id]: {
                    checked: e.target.checked, 
                    value: e.target.value
                }
            }
        )
    }
    console.log(checkItems);
    return (
        <Fragment>
            <div>
                <input type='checkbox' 
                id="walk" 
                checked={checkItems['walk']?.checked || false}
                onChange={changeCheckbox}
                value="산책"
                ></input>
                <label htmlFor='walk'>산책</label>

                &nbsp;
                <input type='checkbox' 
                id="music" 
                checked={checkItems['music']?.checked || false}
                onChange={changeCheckbox}
                value="음악감상"
                ></input>
                <label htmlFor='music'>음악감상</label>

                &nbsp;
                <input type='checkbox' 
                id="swim" 
                checked={checkItems['swim']?.checked || false}
                onChange={changeCheckbox}
                value="수영"
                ></input>
                <label htmlFor='swim'>수영</label>
                &nbsp;

                <input type='checkbox' 
                id="movie" 
                checked={checkItems['movie']?.checked || false}
                onChange={changeCheckbox}
                value="산책"
                ></input>
                <label htmlFor='movie'>영화감상</label>
            </div>
            <div>
                <ul>
                    {
                        Object.keys(checkItems)
                        .filter(id => checkItems[id].checked)
                        .map((key, index) =>(
                            <li key={index}>{checkItems[key].value}</li>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    );
}

export default CheckBoxExam;