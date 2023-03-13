const DirectionCard = ({ data, togglePopup }) => {
	return (
		<div onClick={() => togglePopup(data.key)}>
			<img src={data.img} alt="" />
			<h3>{data.text}</h3>
		</div>
	);
};

export default DirectionCard;
