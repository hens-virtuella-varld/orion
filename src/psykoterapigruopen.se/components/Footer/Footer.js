import map from "../../assets/orion-map-footer.png";
import logo from "../../assets/orion-logo-footer.svg";
import FooterCss from "./Footer.module.css";
const Footer = () => {
	return (
		<div className={FooterCss.container}>
			<div>
				<img src={logo} alt="" />
			</div>
			<div>
				<h3>Kontakt information</h3>
				<div>Tel: 010 - 200 78 55.</div>
				<div>E- post: info@psykoterapigruppenorion.se. </div>
				<div>Postadress: Psykoterapigruppen Orion, </div>
				<div>Bergsundsgatan 17, 117 37 Stockholm.</div>
				<div>Org. no: 559177-4673.</div>
			</div>
			<div>
				<h3>Adress</h3>
				<img src={map} alt="" />
			</div>
		</div>
	);
};

export default Footer;
