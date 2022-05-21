import { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import Title from '../../components/Title/Title';
import EventCard from '../../components/EventCard/EventCard';
import Button from '../../components/Button/Button';
import BlogCard from '../../components/BlogCard/BlogCard';
import blogData from '../../data/blogData';
import eventsData from '../../data/eventsData';
import socialMediaData from '../../data/socialMediaData';
import emailjs from 'emailjs-com';
import useForm from '../../hooks/useForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import './Connect.scss';

const Connect = () => {
	const { darkMode } = useContext(DarkModeContext);

	const initialValue = {
		email: '',
		name: '',
		subject: '',
		description: '',
		message: '',
	};

	const [values, handleInputChange, setValues] = useForm(initialValue);
	const { email, name, subject, description, message } = values;
	const [isEmailSent, setIsEmailSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setIsEmailSent(!isEmailSent);
		emailjs
			.sendForm(
				'service_xdyk09o',
				'template_xz0vtmp',
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
		setValues(initialValue);
	};

	const onBlogClick = (url) => {
		window.open(url, '_blank');
	};

	console.log(socialMediaData);
	return (
		<div className={darkMode ? 'connect connect__dark' : 'connect'}>
			<Title
				title="Join the Cointinuum Community"
				paragraph="Cointinuum Connect is a vibrant hub for real estate professionals, community investors, crypto holders, and believers alike! Looking to learn more about CTM and BRX? Connect with our community today."
			/>
			<div
				className={
					darkMode
						? 'connect__image--container connect__image--container--dark'
						: 'connect__image--container'
				}
			>
				{socialMediaData.map(({ id, name, url, image }) => {
					return (
						<a key={id} href={url} target="_blank" rel="noreferrer">
							<img
								className={
									darkMode
										? 'connect__image connect__image--dark'
										: 'connect__image'
								}
								src={image}
								alt={name}
							/>
						</a>
					);
				})}
			</div>
			<h1 className="connect__title">The Latest from Our Blog</h1>
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				navigation={true}
				pagination={{ clickable: true }}
				breakpoints={{
					310: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1560: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
					1920: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				{blogData.map(({ id, title, paragraph, date, image, url }) => {
					return (
						<SwiperSlide>
							<BlogCard
								key={id}
								title={title}
								paragraph={paragraph}
								date={date}
								image={image}
								onClick={() => onBlogClick(url)}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<h1 className="connect__title">Upcoming Events</h1>
			<Swiper
				slidesPerView={3}
				spaceBetween={10}
				navigation={true}
				pagination={{ clickable: true }}
				breakpoints={{
					310: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1560: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
					1920: {
						slidesPerView: 5,
						spaceBetween: 50,
					},
				}}
				modules={[Navigation, Pagination]}
				className="mySwiper"
			>
				{eventsData.map(({ id, title, subTitle, time, day, month, image }) => {
					return (
						<SwiperSlide>
							<EventCard
								key={id}
								title={title}
								subTitle={subTitle}
								day={day}
								month={month}
								time={time}
								image={image}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Title title="Send Us a Message" />
			{!isEmailSent ? (
				<form className="connect__form" onSubmit={sendEmail}>
					<input
						name="email"
						className={
							darkMode
								? 'connect__input connect__input--dark'
								: 'connect__input'
						}
						type="email"
						placeholder="Email"
						value={email}
						onChange={handleInputChange}
					/>
					<div className="connect__name">
						<input
							name="name"
							className={
								darkMode
									? 'connect__input connect__input--dark input__name'
									: 'connect__input input__name'
							}
							type="text"
							placeholder="Name"
							value={name}
							onChange={handleInputChange}
						/>
						<input
							name="subject"
							className={
								darkMode
									? 'connect__input connect__input--dark input__name'
									: 'connect__input input__name'
							}
							type="text"
							placeholder="Subject"
							value={subject}
							onChange={handleInputChange}
						/>
					</div>
					<input
						name="description"
						className={
							darkMode
								? 'connect__input connect__input--dark'
								: 'connect__input'
						}
						type="text"
						placeholder="Who are you? (eg. enthusiast, real estate agent, nonprofit organization, etc.)"
						value={description}
						onChange={handleInputChange}
					/>
					<textarea
						name="message"
						className={
							darkMode
								? 'connect__input connect__input--dark'
								: 'connect__input'
						}
						cols="30"
						rows="10"
						placeholder="Message"
						value={message}
						onChange={handleInputChange}
					></textarea>
					<p>
						If you would like to recive periodic communications from Cointinuum
						about upcoming events, product launches, airdrops, and more, please
						check the box below:
					</p>
					<p>
						<input type="checkbox" className="connect__checkbox"></input>
						<label form="connect__checkbox">
							I agree to recieve newsletters from Cointinuum and the Bit Real
							Estate Exchange.
						</label>
					</p>
					<Button className="btn__secondary" content="Send" type="submit" />
				</form>
			) : (
				<h1 className="connect__message--success">
					We have received your message.
				</h1>
			)}
		</div>
	);
};

export default Connect;
