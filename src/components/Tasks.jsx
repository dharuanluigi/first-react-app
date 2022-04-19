import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={uuidv4(10)}
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskDeletion={handleTaskDeletion} />
			))}
		</>
	);
};

export default Tasks;
