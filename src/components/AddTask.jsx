import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {

	const [inputData, setInputData] = useState('');
	const [classInputName, setClassInputName] = useState("add-task-input");

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	};

	const handleTaskClick = () => {
		if (inputData) {
			handleTaskAddition(inputData);
			setInputData('');
			setClassInputName("add-task-input");
		}
		else {
			setClassInputName("add-task-input-warning");
		}
	};

	return (
		<div className="add-task-container">
			<input
				onChange={handleInputChange}
				value={inputData}
				className={classInputName}
				type="text"
				placeholder='Type the task name...'
			/>
			<div className="add-task-button-container">
				<Button onClick={handleTaskClick}>Add task</Button>
			</div>
		</div>
	);
};

export default AddTask;