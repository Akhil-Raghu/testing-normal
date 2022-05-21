import { useContext } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { DarkModeContext } from '../../Context/DarkModeContext';
import useClickOutside from '../../hooks/useClickOutside';
import './InvestCard.scss';

const InvestCard = ({ onClick, investInfo, setIsOpen, className }) => {
	const { darkMode } = useContext(DarkModeContext);

	const domNode = useClickOutside(() => setIsOpen(false));

	const { id, name, image, title, bulletPoints, text, text2 } = investInfo;

	return (
		<div className={darkMode ? 'investCard__card investCard__card--dark' : 'investCard__card'} key={id} ref={domNode}>
			<GrFormClose className="investCard__close" onClick={onClick} />
			<img className="investCard__image" src={image} alt={name} />
			<div className="investCard__info">
				<h1 className="investCard__name">{title}</h1>
				<ul className="investCard__list">
					{bulletPoints.map((item) => {
						return <li className="investCard__item">{item}</li>;
					})}
				</ul>
				<p className="investCard__paragraph">{text}</p>
				<p className="investCard__paragraph">{text2}</p>
			</div>
		</div>
	);
};

export default InvestCard;
