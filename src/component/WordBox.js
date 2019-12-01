import React, {useEffect, useRef, useState} from 'react';
import SmallBox from './SmallBox';
import _ from 'lodash';

const answers = [
	[[0, 0], [0, 1], [0, 2], [0, 3]]
];

const WordBox = () => {
	const charactors = [
		[
			{alphabet: 'l', isChecked: false},
			{alphabet: 'i', isChecked: false},
			{alphabet: 'n', isChecked: false},
			{alphabet: 'e', isChecked: false},
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
	//const activeXY = useRef([]);
	const [checkedCount, setCheckedCount] = useState(0);
	const [activeArr, setActiveArr] = useState([]);
	const handleCheck = (x, y, active) => {
		//console.log("handleCheck");
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
		//console.log(activeArr);
		if (activeArr.length === 5) {
			setActiveArr([]);
		}
		const check = checkAnswer();
		console.log(check);
	}, [activeArr]);

	const isActive = (x, y) => {
		const find = _.findIndex(activeArr, (el)=>{
			return JSON.stringify(el) === JSON.stringify([x, y]);
		});
		return find !== -1;
	}

	const checkAnswer = () => {
		let ret = undefined;
		answers.forEach(item=>{
			//console.log("checkAnswer");
			//console.log(item);
			const findWord = item.every((el)=>{
				for (let i = 0 ; i < activeArr.length ; i++) {
					if (JSON.stringify(el) === JSON.stringify(activeArr[i])) {
						return true;
					}
				}
				return false;
			});
			if (findWord) {
				console.log("find");
				console.log(findWord);
				ret = item;
				return;
			}
		});
		return ret;
	}
	
	return (
		<div className="word-box">
			<ul>
				{
					charactors.map((arr, key)=>(
						<>
						{
							arr.map((item, key2)=>(
								<SmallBox 
									item={item} x={key2} y={key} onClicked={handleCheck} 
									clickedLength={activeArr.length} active={isActive(key2, key)} 
									isAnswerChecked={false}/>
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