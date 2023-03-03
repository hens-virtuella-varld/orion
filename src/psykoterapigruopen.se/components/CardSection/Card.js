const Card = ({ therapist }) => {
	return (
		<div>
			<img src={therapist.img} alt="Therapist profile" />
			<h3>Name: {therapist.name}</h3>
			<div>Location: {therapist.city}</div>
			<ul>
				Specialised area:
				{therapist.category.map((categoryItem) => (
					<li>{categoryItem}</li>
				))}
			</ul>
		</div>
	);
};

export default Card;
