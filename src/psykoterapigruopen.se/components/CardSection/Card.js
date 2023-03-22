import CardCss from "./Card.module.css";
import { useNavigate } from "react-router-dom";
const Card = ({ therapist }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/profile");
	};
	return (
		<div onClick={handleClick} className={CardCss.container}>
			<div className={CardCss.innerContainer}>
				<img src={therapist.img} alt="Therapist profile" />
				<div className={CardCss.cardColOne}>
					<h3>{therapist.name}</h3>
					<div className={CardCss.city}>{therapist.city}</div>
				</div>
				<div className={CardCss.cardColTwo}>
					<div className={CardCss.title}>{therapist.title}</div>
					<div>{therapist.price} kr/h</div>
				</div>

				<ul className={CardCss.listContainer}>
					{therapist.category.map((categoryItem) => (
						<li className={CardCss.listItem}>{categoryItem}</li>
					))}
				</ul>
				<div className={CardCss.containerTherapistInfo}>
					<p>{therapist.info}</p>
				</div>
				<div className={CardCss.showProfile}>
					<div>Visa profil</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
