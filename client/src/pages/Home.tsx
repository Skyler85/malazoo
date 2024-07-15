import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Recipe {
	idDrink: string;
	strDrink: string;
	strDrinkThumb: string;
}
interface HomeProps {
	title: string;
}

const Home: React.FC<HomeProps> = () => {
	const { t } = useTranslation();
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((response) => {
			setRecipes(response.data.drinks);
		});
	}, []);

	return (
		<div>
			<h2>{t('welcome')}</h2>
			<input type="text" placeholder={t('search')} />
			<div>
				{recipes.map((recipe) => (
					<div key={recipe.idDrink}>
						<h3>{recipe.strDrink}</h3>
						<img src={recipe.strDrinkThumb} alt={recipe.strDrink} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
