import React, {useEffect, useRef, useState} from 'react';
import SmallBox from './SmallBox';
import _ from 'lodash';

const WordBox = () => {
    const charactors = [
        [
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
        ],
        [
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
        ],
        [
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
        ],
        [
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
        ],
        [
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'a', isChecked: false},
            {alphabet: 'b', isChecked: false},
        ],
    ];
    const activeXY = useRef([]);
    const [checkedCount, setCheckedCount] = useState(0);
    const [activeArr, setActiveArr] = useState([]);
    const handleCheck = (x, y, active) => {
        console.log("handleCheck");
        if (active) {
            //activeXY.current.push([x, y]);
            setActiveArr([...activeArr, [x, y]]);
        } else {
            const copy = _.cloneDeep(activeArr);
            const find = _.findIndex(copy, (el)=>{
                return JSON.stringify(el) === JSON.stringify([x, y]);
            });
            copy.splice(find, 1);
            setActiveArr(copy);
        }
        //setCheckedCount(activeXY.current.length);
    }
    //console.log("wordbox render");

    useEffect(()=>{
        console.log(activeArr);
        if (activeArr.length === 5) {
            setActiveArr([]);
        }
    }, [activeArr]);
    const isActive = (x, y) => {
        const find = _.findIndex(activeArr, (el)=>{
            return JSON.stringify(el) === JSON.stringify([x, y]);
        });
        return find !== -1;
    }
    
    return (
        <div className="word-box">
            <ul>
                {
                    charactors.map((arr, key)=>(
                        <>
                        {
                            arr.map((item, key2)=>(
                                <SmallBox item={item} x={key2} y={key} onClicked={handleCheck} 
                                clickedLength={activeArr.length} active={isActive(key2, key)}/>
                            ))
                        }
                        </>
                    ))
                }
                
            </ul>
        </div>
    );
}

export default WordBox;