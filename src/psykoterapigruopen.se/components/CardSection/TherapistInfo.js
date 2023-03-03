import emailIcon from "../../assets/email-icon.svg";
import mobileIcon from "../../assets/mobile-icon.svg";

const TherapistInfo = ({ therapistData }) => {
	const id = 0;

	return (
		<div>
			<img src={therapistData[id].img} alt="" />
			<h3>{therapistData[0].name}</h3>
			<div>{therapistData[0].title}</div>
			<div>
				<img src={emailIcon} alt="" />
				{therapistData[0].email}
			</div>
			<div>
				<img src={mobileIcon} alt="" />
				{therapistData[0].mobile}
			</div>
			<div>
				<h3>Inforamtion</h3>
				<p>{therapistData[0].info}</p>
			</div>
			<div>{therapistData[0].city}</div>
			<div>{therapistData[0].price}</div>
			<div>
				<ul>
					{therapistData[0].category.map((categoryItem) => (
						<li>{categoryItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TherapistInfo;
