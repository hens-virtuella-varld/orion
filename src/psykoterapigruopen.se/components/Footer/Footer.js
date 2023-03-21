import map from "../../assets/orion-map-footer.png";
import logo from "../../assets/orion-logo-footer.svg";
import FooterCss from "./Footer.module.css";
const Footer = () => {
	return (
		<div className={FooterCss.container}>
			<div>
				<img src={logo} alt="" />
			</div>
		</div>
	);
};

export default Footer;
