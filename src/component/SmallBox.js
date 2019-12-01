import React, {useState, useEffect, useRef} from 'react';

const SmallBox = ({item, x, y, active, onClicked, clickedLength, isAnswerChecked}) => {
    //const [active, setActive] = useState(false);
    const isMount = useRef(false);
    const handleClick = () => {
        if (!active && clickedLength >= 5) {
            return;
        }
        onClicked(x, y, !active);
        //setActive(p=>!p);
    }
    // useEffect(()=>{
    //     if (!isMount.current) {
    //         isMount.current = true;
    //     } else {
    //         console.log(clickedLength);
    //         onClicked(x, y, active);
    //     }
    //     return ()=>{
    //         //isMount.current = false;
    //     }
    // }, [active]);
    return (
    <li className={`${active ? "active":""} ${isAnswerChecked ? "answer":""}`} 
    onClick={handleClick}>{item.alphabet}</li>
    );
}

export default SmallBox;