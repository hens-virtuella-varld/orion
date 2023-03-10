const DirectionCard = ({ data, directionCardHandler }) => {
	return (
		<div onClick={() => directionCardHandler(data.key)}>
			<img src={data.img} alt="" />
			<h3>{data.text}</h3>
		</div>
	);
};

export default DirectionCard;
