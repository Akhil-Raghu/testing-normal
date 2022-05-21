import './VideoCard.scss';

const VideoCard = ({ title, video, image }) => {
	return (
		<div className="video__card">
			<h1 className="video__title">{title}</h1>
			<video className="video__" src={video} autoPlay controls></video>
			<img className="video__image" src={image}></img>
		</div>
	);
};

export default VideoCard;
