import CardCss from "./Card.module.css";

import React from "react";

// import therapistItem from "../../therapists.json";
import { Link } from "react-router-dom";
const Card = ({ therapistData }) => {
	const therapist = therapistData.map((therapist) => {
		return (
			<div key={therapist.id}>
				<Link to={`/cards/${therapist.id}`}>
					<h3>{therapist.name}</h3>
					<p>city: ${therapist.city}</p>
					<hr />
				</Link>
			</div>
		);
	});

	return (
		<>
			<h1>Products Page</h1>
			{therapist}
		</>
	);
};

export default Card;
// import CardCss from "./Card.module.css";
// import { Link } from "react-router-dom";
// const Card = ({ therapist }) => {
// 	return (
// 		<Link
// 			to={`/cards/${therapist.id}`}
// 			className={CardCss.container}
// 			key={therapist.id}
// 		>
// 			<div className={CardCss.innerContainer}>
// 				<img src={therapist.img} alt="Therapist profile" />
// 				<div className={CardCss.cardColOne}>
// 					<h3>{therapist.name}</h3>
// 					<div className={CardCss.city}>{therapist.city}</div>
// 				</div>
// 				<div className={CardCss.cardColTwo}>
// 					<div className={CardCss.title}>{therapist.title}</div>
// 					<div>{therapist.price} kr/h</div>
// 				</div>

// 				<ul className={CardCss.listContainer}>
// 					{therapist.category.map((categoryItem) => (
// 						<li className={CardCss.listItem}>{categoryItem}</li>
// 					))}
// 				</ul>
// 				<div className={CardCss.containerTherapistInfo}>
// 					<p>{therapist.info}</p>
// 				</div>
// 				<div className={CardCss.showProfile}>
// 					<div>Visa profil</div>
// 				</div>
// 			</div>
// 		</Link>
// 	);
// };

// export default Card;
