import arrowImage from "../../assets/orion-arrow.svg";

const NavList = () => {
	return (
		<div>
			<ul>
				<li>
					Handledning <img src={arrowImage} alt="arrow icon" />
				</li>
				<li>
					Utbildning <img src={arrowImage} alt="arrow icon" />
				</li>
				<li>
					Psykoterapi <img src={arrowImage} alt="arrow icon" />
				</li>
				<li>
					Om oss <img src={arrowImage} alt="arrow icon" />
				</li>
			</ul>
		</div>
	);
};

export default NavList;
