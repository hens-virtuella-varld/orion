import Card from "./Card";
import CardListCSS from "./cardList.module.css";

const CardList = ({ therapistData }) => {
	return (
		<div className={CardListCSS.cardListContainer}>
			{therapistData.map((therapist) => (
				<Card therapist={therapist} key={therapist.id} />
			))}
		</div>
	);
};

export default CardList;
