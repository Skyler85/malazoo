import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Header from './components/Header';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home title={t('home_title')} />} />
				<Route path="/recipe/:id" element={<Recipe />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
