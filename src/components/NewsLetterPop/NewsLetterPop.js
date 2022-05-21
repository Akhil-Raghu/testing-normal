import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import emailjs from 'emailjs-com';

import './NewsLetterPop.scss';

const NewsLetterPop = ({ onClick }) => {
	const [email, setEmail] = useState('');

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();
		if (email) {
			emailjs
				.sendForm(
					'service_n0mdid5',
					'template_zlpi6ci',
					e.target,
					'_FzTNzrFNAri7_v7i'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
			onClick(onClick);
		}
		return;
	};

	return (
		<div className="newsLetter">
			<div className="newsLetter__card">
				<GrFormClose className="newsLetter__close" onClick={onClick} />
				<h1 className="newsLetter__title">
					Connect with Cointinuum to earn 5 CTM!
				</h1>
				<p className="newsLetter__paragraph">
					Join our newsletter to enter a vibrant community of early Cointinuum
					adopters and claim 5 CTM deposited to your ERC-20 compatible wallet.
				</p>
				<p className="newsLetter__paragraph">
					Get updates from Cointinuum about upcoming events, product launches,
					airdrops, prizes, and more!
				</p>
				<form className="newsLetter__email" onSubmit={sendEmail}>
					<input
						name="email"
						className="newsLetter__input"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => handleEmailChange(e)}
					/>
					<button className="newsLetter__button" type="submit">
						<BsArrowRightShort className="newsLetter__arrow" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewsLetterPop;
