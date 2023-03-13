import DirectionCard from "./DirectionCard";

const DirectionCardWrapper = ({ directionCardData, togglePopup }) => {
	return (
		<div>
			{directionCardData.map((data) => (
				<DirectionCard data={data} togglePopup={togglePopup} />
			))}
		</div>
	);
};

export default DirectionCardWrapper;
