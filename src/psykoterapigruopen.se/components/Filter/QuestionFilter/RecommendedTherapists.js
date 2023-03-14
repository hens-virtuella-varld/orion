import RecommendedTherapistsCss from "./RecommendedTherapists.module.css";
import Card from "../../CardSection/Card";

const RecommendedTherapists = ({ therapistData }) => {
	const therapistDataSlice = therapistData.slice(0, 4);

	const backgroundColor = {
		backgroundColor: "white",
	};

	return (
		<div className={RecommendedTherapistsCss.container}>
			<h2>Rekomenderade therapeuter för dig</h2>
			<div className={RecommendedTherapistsCss.cardListContainer}>
				{therapistDataSlice.map((therapist) => (
					<Card
						therapist={therapist}
						key={therapist.id}
						style={backgroundColor}
					/>
				))}
			</div>
		</div>
	);
};

export default RecommendedTherapists;
