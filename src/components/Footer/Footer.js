import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { BsTwitter } from 'react-icons/bs';
import { BsReddit } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import Cointinuum from '../../images/logo/Wordmark.png';
import emailjs from 'emailjs-com';
import './Footer.scss';

const Footer = () => {
	const navigate = useNavigate();
	const { darkMode } = useContext(DarkModeContext);
	const [email, setEmail] = useState('');
	const [isEmailSent, setIsEmailSent] = useState(false);

	window.addEventListener('resize', () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 1132) {
			document.getElementsByName('email')[0].placeholder = 'Sign up';
		} else {
			document.getElementsByName('email')[0].placeholder =
				'Want to stay involved? Sign up for our newsletter here!';
		}
	});

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
		const resetEmailInput = () => {
			if (isEmailSent) {
				setTimeout(() => {
					setIsEmailSent(false);
					setEmail('');
				}, 6000);
			}
		};
		resetEmailInput();
	}, [isEmailSent]);

	const sendEmail = (e) => {
		e.preventDefault();
		if (email) {
			setIsEmailSent(!isEmailSent);
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
		}
		return;
	};

	const windowWidth = window.innerWidth;

	const onBlogClick = () => {
		navigate('/connect');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 600, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 700, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 700, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 700, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 800, behavior: 'smooth' });
		}
	};

	const onEventsClick = () => {
		navigate('/connect');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 1300, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 1500, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 1500, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 1500, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 1800, behavior: 'smooth' });
		}
	};

	const onContactClick = () => {
		navigate('/connect');
		if (windowWidth > 1919) {
			window.scrollTo({ top: 2000, behavior: 'smooth' });
		} else if (windowWidth > 1359) {
			window.scrollTo({ top: 2200, behavior: 'smooth' });
		} else if (windowWidth > 1023) {
			window.scrollTo({ top: 2220, behavior: 'smooth' });
		} else if (windowWidth > 599) {
			window.scrollTo({ top: 2220, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 2480, behavior: 'smooth' });
		}
	};

	return (
		<div className={darkMode ? 'footer footer--dark' : 'footer'}>
			<img className="footer__logo" src={Cointinuum} alt="cointinuum" />
			{!isEmailSent ? (
				<form className="footer__email" onSubmit={sendEmail}>
					<input
						name="email"
						className="footer__input"
						type="email"
						placeholder="Sign up"
						value={email}
						onChange={(e) => handleEmailChange(e)}
					/>
					<button className="footer__button">
						<BsArrowRightShort className="footer__arrow" />
					</button>
				</form>
			) : (
				<h1 className="footer__message--success">
					We have received your message.
				</h1>
			)}
			<div className="footer__lists list__resources">
				<h1 className="footer__title">RESOURCES</h1>
				<ul className="footer__list">
					<li className="footer__item">FAQs</li>
					<li className="footer__item">Whitepaper</li>
					<li className="footer__item">Diversity Initiative</li>
					<li className="footer__item">Roadmap</li>
					<li className="footer__item">Legal</li>
				</ul>
			</div>
			<div className="footer__lists list__connect">
				<h1 className="footer__title">CONNECT</h1>
				<ul className="footer__list">
					<li className="footer__item" onClick={onBlogClick}>
						Blog
					</li>
					<li className="footer__item" onClick={onEventsClick}>
						Upcoming Events
					</li>
					<li className="footer__item" onClick={onContactClick}>
						Contact Us
					</li>
				</ul>
			</div>
			<div className="footer__lists list__getInvolved">
				<h1 className="footer__title">GET INVOLVED</h1>
				<ul className="footer__list">
					<li className="footer__item">Invest Now</li>
					<li className="footer__item">Careers</li>
				</ul>
			</div>
			<a
				className="footer__twitter"
				href="https://twitter.com/CointinuumBRX"
				target="_blank"
				rel="noreferrer"
			>
				<BsTwitter className="footer__socialMedia" />
			</a>
			<a
				className="footer__reddit"
				href="https://www.reddit.com/r/cointinuum/"
				target="_blank"
				rel="noreferrer"
			>
				<BsReddit className="footer__socialMedia" />
			</a>
			<a
				className="footer__discord"
				href="https://discord.com/channels/893523482221101066/893523498939588631"
				target="_blank"
				rel="noreferrer"
			>
				<FaDiscord className="footer__socialMedia" />
			</a>
			<a
				className="footer__telegram"
				href="https://t.me/cointinuum"
				target="_blank"
				rel="noreferrer"
			>
				<BsTelegram className="footer__socialMedia" />
			</a>
			<a
				className="footer__instagram"
				href="https://www.instagram.com/cointinuum/"
				target="_blank"
				rel="noreferrer"
			>
				<GrInstagram className="footer__socialMedia" />
			</a>
			<a
				className="footer__linkedIn"
				href="https://www.linkedin.com/company/bit-real-estate-exchange"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin className="footer__socialMedia" />
			</a>
			<a
				className="footer__youtube"
				href="https://www.youtube.com/c/COINtinuum"
				target="_blank"
				rel="noreferrer"
			>
				<BsYoutube className="footer__socialMedia" />
			</a>
			<p className="footer__copywrite">
				© 2022 Bit Real Estate Exchange | Privacy Policy
			</p>
		</div>
	);
};

export default Footer;
