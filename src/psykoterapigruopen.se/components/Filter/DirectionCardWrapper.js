import DirectionCard from "./DirectionCard";

const DirectionCardWrapper = ({ directionCardData }) => {
	return (
		<div>
			{directionCardData.map((data) => (
				<DirectionCard data={data} />
			))}
		</div>
	);
};

export default DirectionCardWrapper;
