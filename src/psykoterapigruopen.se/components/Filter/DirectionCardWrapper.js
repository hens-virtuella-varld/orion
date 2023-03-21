import DirectionCard from "./DirectionCard";
import DirectionCardWrapperCss from "./DirectionCardWrapper.module.css";
import { useState } from "react";

const DirectionCardWrapper = ({
	directionCardData,
	togglePopup,
	sectionTwoScroll,
}) => {
	const [selectedCard, setSelectedCard] = useState("01");

	const handleCardClick = (data) => {
		setSelectedCard(data);
	};

	return (
		<div className={DirectionCardWrapperCss.container} ref={sectionTwoScroll}>
			{directionCardData.map((data) => (
				<div onClick={() => handleCardClick(data.key)}>
					<DirectionCard
						key={data.key}
						data={data}
						togglePopup={togglePopup}
						selectedCard={selectedCard}
					/>
				</div>
			))}
		</div>
	);
};

export default DirectionCardWrapper;
