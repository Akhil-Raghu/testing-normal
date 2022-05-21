import { useContext, useState } from 'react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import LargeCard from '../../components/LargeCard/LargeCard';
import TeamCard from '../../components/TeamCard/TeamCard';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Biography from '../../components/Biography/Biography';
import teamData from '../../data/teamData';
import Founder from '../../images/about/MeetTheFounder.jpg';
import Equity from '../../images/about/equity.png';
import Sustain from '../../images/about/sustainability.png';
import './About.scss';

const About = () => {
	const { darkMode } = useContext(DarkModeContext);
	const [biography, setBiography] = useState(false);
	const [teamBio, setTeamBio] = useState({});

	const showBio = (
		id,
		name,
		position,
		image,
		linkedIn,
		personalWeb,
		description,
		quote
	) => {
		setTeamBio({
			id,
			name,
			position,
			image,
			linkedIn,
			personalWeb,
			description,
			quote,
		});
		setBiography(!biography);
	};

	const onCloseBio = () => {
		setBiography(!biography);
	};

	return (
		<div className={darkMode ? 'about about__dark' : 'about'}>
			<LargeCard
				className={darkMode ? 'large__card large__card--dark' : 'large__card'}
				image={Founder}
				title="Meet the founder"
				paragraph1="My journey with Cointinuum could honestly be said to have begun in 2002 when I created my first real estate sales platform, Pinnacle Wholesale. The idea was then as it is now, to solve problems in real estate transactions, particularly for investors.  I’ve been building on this idea ever since."
				paragraph2="My inspiration has come from various other roles and assignments I’ve accepted over those many years Whether working as a financial advisor at American Express or Neighborhood Stabilization during the ’08 housing crisis, I’ve been fortunate to have a unique lens with which to see and address the most pressing issues of our time concerning community revitalization and economic redevelopment."
				paragraph3="Cointinuum BRX builds on top of that existing body of work and ushers in a new paradigm for community leaders to use their work and to empower every community member with the initiative to do the same."
			/>
			<Title
				title="Our Mission"
				paragraph="At Cointinuum, we believe that access to markets can be empowering to individuals, businesses, and communities alike. We are on a mission to democratize real estate investments for all while supporting economic development throughout diverse communities across the US."
			/>
			<LargeCard
				className={
					darkMode
						? 'large__card large__reverse large__card--dark'
						: 'large__card large__reverse'
				}
				image={Equity}
				title="Economic Equity"
				paragraph1="We recognize that there are structural inequities which disproportionately affect the educational, career, and commercial opportunities within communities of color, and that these disparities tend to form a cycle of poverty and despair for those community members."
				paragraph2="Cointinuum addresses this disparity through an innovative social impact strategy which provides community redevelopment programming, technical education and jobs programs, and a commercial investment strategy that helps circulate local dollars throughout the community in greater amounts. This innovative and intentional approach will bring capital back into the community, empower its members and spread social and financial equity throughout underserved communities across the country, who need it the most."
				paragraph3="Our strategy creates a “multiplier effect”, promoting economic redevelopment, supporting Black and Brown small businesses, increasing school district funding through increasing the real estate tax base, amplifying diversity in the tech sector, and boundless other opportunities yet to be discovered."
			/>
			<Button
				className={
					darkMode ? 'btn__secondary btn__secondary--dark' : 'btn__secondary'
				}
				content="Learn more about our Diversity Initiative >"
				content2="Diversity Initiative >"
				// onClick={handleLearnClick}
			/>
			<LargeCard
				className={
					darkMode
						? 'large__card large__reverse large__card--dark'
						: 'large__card large__reverse'
				}
				image={Sustain}
				title="Environmental Sustainability"
				paragraph1="Data centers are vital for our society to connect, conduct business, and store information. The rise of Bitcoin mining and other proof-of-work cryptocurrencies further accelerates the demand for data centers, but this comes at a heavy environmental cost. Traditional data centers are energy-intensive, causing significant greenhouse gas emissions. Cointinuum seeks to provide an environmentally responsible solution."
				paragraph2="We’re working to acquire and reposition property suitable for development or redevelopment into data centers, which will operate sustainably and efficiently through clean energy sourced from wind and hydroelectric power. Though Web3 is undeniably innovative and revolutionary, it is still tethered to the physical world that is fueling it. Ultimately, the source of this technology’s energy will determine its environmental impact. Cointinuum strives to be stewards of a more carbon-neutral blockchain system."
			/>
			<Title title="Meet the Team" />
			{biography && (
				<Biography
					teamBio={teamBio}
					onClick={onCloseBio}
					setBiography={setBiography}
				/>
			)}
			<div className="about__team--cards">
				{teamData.map(
					({
						id,
						name,
						position,
						image,
						linkedIn,
						personalWeb,
						description,
						quote,
					}) => {
						return (
							<TeamCard
								key={id}
								name={name}
								position={position}
								image={image}
								onClick={() =>
									showBio(
										id,
										name,
										position,
										image,
										linkedIn,
										personalWeb,
										description,
										quote
									)
								}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default About;
