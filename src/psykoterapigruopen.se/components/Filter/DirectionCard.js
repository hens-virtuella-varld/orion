const DirectionCard = ({ data }) => {
	return (
		<div>
			<img src={data.img} alt="" />
			<h3>{data.text}</h3>
		</div>
	);
};

export default DirectionCard;
