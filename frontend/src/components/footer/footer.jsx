import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterСontainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=47d69ddba268075f230be813b89a5744',
		)
			.then((data) => data.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>Блог веб-разработчика</div>
			<div>web@developper.ru</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleDateString('ru', {
						day: 'numeric',
						month: 'long',
					})}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterСontainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 2px 17px #000;
	background-color: white;
	font-weight: bold;
`;
