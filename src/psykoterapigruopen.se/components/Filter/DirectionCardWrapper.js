import DirectionCard from "./DirectionCard";

const DirectionCardWrapper = ({ directionCardData, directionCardHandler }) => {
	return (
		<div>
			{directionCardData.map((data) => (
				<DirectionCard data={data} directionCardHandler={directionCardHandler}  />
			))}
		</div>
	);
};

export default DirectionCardWrapper;
