import CardCss from "./Card.module.css";

const Card = ({ therapist }) => {
	return (
		<div className={CardCss.container}>
			<div className={CardCss.innerContainer}>
				<img src={therapist.img} alt="Therapist profile" />
				<div className={CardCss.cardColOne}>
					<h3>{therapist.name}</h3>
					<div className={CardCss.city}>{therapist.city}</div>
				</div>
				<div className={CardCss.cardColTwo}>
					<div className={CardCss.title}>{therapist.title}</div>
					<div>{therapist.price}kr</div>
				</div>

				<ul className={CardCss.listContainer}>
					{therapist.category.map((categoryItem) => (
						<li className={CardCss.listItem}>{categoryItem}</li>
					))}
				</ul>
				<div>
					<p>{therapist.info}</p>
				</div>
				<div>Visa profil</div>
			</div>
		</div>
	);
};

export default Card;
