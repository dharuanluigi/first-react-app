import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import TaskDetails from './components/TaskDetails';
import Home from './components/Home';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className="container">
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/:taskId' element={<TaskDetails />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
