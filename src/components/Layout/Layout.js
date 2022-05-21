import { useState, useEffect } from 'react';
import NewsLetterPop from '../NewsLetterPop/NewsLetterPop';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';

const Layout = ({ children }) => {
	const [newsLetter, setNewsLetter] = useState(false);
	const [counter, setCounter] = useState(0);

	const count = () => {
		if (newsLetter) {
			setCounter(localStorage.setItem('counter', counter + 1));
		}
	};

	const localStorageCounter = localStorage.getItem('counter');

	useEffect(() => {
		const getNewsLetter = () => {
			if (!localStorageCounter) {
				setTimeout(() => {
					setNewsLetter(true);
				}, 180000);
			}
		};
		getNewsLetter();
	}, [newsLetter, localStorageCounter]);

	const isNewsLetter = () => {
		setNewsLetter(!newsLetter);
		count();
	};

	return (
		<div className="layout">
			{newsLetter && <NewsLetterPop onClick={isNewsLetter} />}
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
