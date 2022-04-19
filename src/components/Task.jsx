import { CgClose, CgInfo } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import './Task.css';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {

	const handleTaskStyle = () => {
		if (task.completed) {
			return {
				borderLeft: '6px solid chartreuse'
			};
		}
	};

	return (
		<div className="task-container" style={handleTaskStyle()}>
			<div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</div>

			<div className="buttons-container">

				<Link to={`/${task.id}`} className="see-task-detail-button">
					<CgInfo />
				</Link>

				<button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
					<CgClose />
				</button>
			</div>
		</div>
	);
};

export default Task;
