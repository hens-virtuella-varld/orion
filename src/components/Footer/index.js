import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer-icon">
				<img src="./assets/logo-footer.svg" alt="logo-footer" />
			</div>
			<div className="information-container">
				<h3>Kontakt information</h3>
				<div className="information-content">
					<p> Tel: 010 - 200 78 55.</p>
					<p>E- post: info@psykoterapigruppenorion.se. </p>
					<p>Postadress: Psykoterapigruppen Orion, Bergsundsgatan </p>
					<p>17, 117 37 Stockholm.</p>
					<p>Org. no: 559177-4673.</p>
				</div>
			</div>
			<div className="location">
				<h4>Address</h4>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.39963581588!2d17.841971426174243!3d59.3260668142143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1sen!2sse!4v1678734820748!5m2!1sen!2sse"></iframe>
			</div>
		</div>
	);
};

export default Footer;
