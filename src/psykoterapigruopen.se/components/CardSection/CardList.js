import Card from "./Card";

const CardList = ({ therapistData }) => {
	return (
		<div>
			{therapistData.map((therapist) => (
				<Card therapist={therapist} key={therapist.id} />
			))}
		</div>
	);
};

export default CardList;
