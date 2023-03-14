import DirectionCardCss from "./DirectionCard.module.css";

const DirectionCard = ({ data, togglePopup, selectedCard }) => {
	return (
		<div
			className={DirectionCardCss.card}
			onClick={() => togglePopup(data.key)}
			style={{
				backgroundColor: selectedCard === data.key ? "#C3E0DF" : "white",
			}}
		>
			<img src={data.img} alt="" />
			<h3>{data.text}</h3>
		</div>
	);
};

export default DirectionCard;
