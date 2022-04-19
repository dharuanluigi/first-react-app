import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();

    return (
        <>
            <div className='back-button-container'>
                <Button>
                    <Link to="/">Back</Link>
                </Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskId}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vel!
                </p>
            </div>
        </>
    );
}

export default TaskDetails;