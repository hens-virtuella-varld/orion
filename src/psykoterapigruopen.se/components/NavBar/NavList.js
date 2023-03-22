import arrowImage from "../../assets/orion-arrow.svg";
import NavListCss from "./NavList.module.css";
import { useNavigate } from "react-router-dom";
const NavList = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/signup");
	};

	const handleHome = () => {
		navigate("/");
	};
	return (
		<div className={NavListCss.container}>
			<ul className={NavListCss.navListContainer}>
				<li>
					Handledning <img src={arrowImage} alt="arrow icon" />
				</li>
				<li>
					Utbildning <img src={arrowImage} alt="arrow icon" />
				</li>
				<li onClick={handleHome}>
					Psykoterapi <img src={arrowImage} alt="arrow icon" />
				</li>
				<li>
					Om oss <img src={arrowImage} alt="arrow icon" />
				</li>
			</ul>
			<button className={NavListCss.signUpButton} onClick={handleClick}>
				Sign up
			</button>
		</div>
	);
};

export default NavList;
