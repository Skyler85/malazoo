import React from 'react';
// import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
	// const { i18n } = useTranslation();

	// const changeLanguage = (lng: string) => {
	// 	i18n.changeLanguage(lng);
	// };

	return (
		<header className="h-40">
			<h1>Cocktail Recipe Platform</h1>
			{/* <button onClick={() => changeLanguage('en')}>EN</button>
			<button onClick={() => changeLanguage('es')}>ES</button> */}
		</header>
	);
};

export default Header;
