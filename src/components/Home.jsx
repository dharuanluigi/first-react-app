import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './Tasks';
import AddTask from './AddTask';

const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Learn programming',
            completed: false,
        },
        {
            id: '2',
            title: 'Read books',
            completed: true,
        },
    ]);

    const handleTaskClick = (taskId) => {
        const changeTaskComplete = (task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }

            return task;
        };
        const newTasks = tasks.map(changeTaskComplete);

        setTasks(newTasks);
    };

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            id: uuidv4
                (10),
            title: taskTitle,
            completed: false
        }];
        setTasks(newTask);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    };

    return (
        <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
            />
        </>
    );
}

export default Home;