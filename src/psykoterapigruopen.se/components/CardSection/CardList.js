import Card from "./Card";
import CardListCSS from "./cardList.module.css";

const CardList = ({ therapistData }) => {
	return (
		<div className={CardListCSS.cardListContainer}>
			<Card therapistData={therapistData} />
		</div>
	);
};

export default CardList;
