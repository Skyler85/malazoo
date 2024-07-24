import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Signup from './pages/Signup.tsx';
import Layout from './components/Layout.tsx';
import './App.css';

const App: React.FC = () => {
	// const { t } = useTranslation();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home title={'home_title'} />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/signup" element={<Signup />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
