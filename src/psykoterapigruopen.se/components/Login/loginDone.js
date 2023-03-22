import BubblesTwo from "../../assets/orion-bubbles-two2.svg";
import RegisterImg from "../../assets/orion-register-img.png";

import LoginDone from "./loginDone.module.css";

const loginDone = () => {
	return (
		<div className={LoginDone.container}>
			<div className={`${LoginDone.column} ${LoginDone.leftColumn}`}>
				<img src={BubblesTwo} alt="" />
				<div className={LoginDone.centeredText}>
					<h2>Tack för din regestrering!</h2>
					<p>
						Nu är du klar med registreringen och vi återkommer när din profil är
						uppe på hemsidan!
					</p>
				</div>
			</div>
			<div className={`${LoginDone.column} ${LoginDone.rightColumn}`}>
				<img src={RegisterImg} alt="" />
			</div>
		</div>
	);
};

export default loginDone;
