import { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import InvestCard from '../../components/InvestCard/InvestCard';
import MapImage from '../../components/MapImage/MapImage';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import investData from '../../data/investData';
import Streets from '../../images/invest/streets.png';
import Roadmap from '../../images/invest/roadmap.png';

import './Invest.scss';

const Invest = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [isOpen, setIsOpen] = useState(false);
	const [investCard, setInvestCard] = useState({});
	const [showCard, setShowCard] = useState(false);
	const [openRoadmap, setOpenRoadmap] = useState(false);

	const showInvestImage = (item) => {
		const { id, name, image, title, bulletPoints, text, text2 } = item;
		setInvestCard({ id, name, image, title, bulletPoints, text, text2 });
		if (!isOpen) {
			setShowCard(true);
			setIsOpen(true);
			scrollDown();
		} else {
			return;
		}
	};

	const scrollDown = () => {
		window.scrollTo({
			top: 1000,
			behavior: 'smooth',
		});
	};

	const scrollUp = () => {
		window.scrollTo({
			top: 300,
			behavior: 'smooth',
		});
	};

	const onCloseInvest = () => {
		setShowCard(false);
		scrollUp();
		setTimeout(() => {
			setIsOpen(false);
		}, 500);
	};

	const isRoadMapOpen = () => {
		setOpenRoadmap(!openRoadmap);
	};

	return (
		<div className={darkMode ? 'invest invest__dark' : 'invest'}>
			<Title
				title="The Future of Real Estate Investing"
				paragraph="Investing in Cointinuum means investing in your community and your future."
				paragraph2=" to learn more."
				span="Explore this interactive map"
			/>
			<div className="map__container">
				<img className="map__streets" src={Streets} alt="streets" />
				{investData.map((item) => {
					return (
						<MapImage
							key={item.id}
							name={item.name}
							image={item.image}
							onClick={() => {
								showInvestImage(item);
							}}
						/>
					);
				})}
			</div>
			{isOpen && (
				<InvestCard
					className={showCard ? 'card__show' : 'card__hide'}
					investInfo={investCard}
					onClick={onCloseInvest}
					setIsOpen={setIsOpen}
				/>
			)}
			<Button
				className={
					darkMode ? 'btn__secondary btn__secondary--dark' : 'btn__secondary'
				}
				content={openRoadmap ? 'Roadmap <' : 'Roadmap >'}
				onClick={isRoadMapOpen}
			/>
			{openRoadmap && (
				<img className="invest__roadmap" src={Roadmap} alt="roadmap" />
			)}
		</div>
	);
};

export default Invest;
