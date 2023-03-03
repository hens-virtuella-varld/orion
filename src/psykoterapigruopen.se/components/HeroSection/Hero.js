import bubblesImage from "../../assets/orion-bubbles.png";
import huggingBrainImage from "../../assets/orion-hugging-brain.png";
import akutIllustrationImage from "../../assets/orion-akut-illustration.svg";

const Hero = () => {
	return (
		<div>
			<img src={bubblesImage} alt="Orion Hero Image" />
			<img src={huggingBrainImage} alt="Orion Hero Image" />
			<div>
				<h2>Om det är brottom </h2>
				<p>Kontakta psykiatrisk akutmottagning eller ring 112.</p>
				<p>Mind självmordslinje, chatt via mind.se eller ring 90101.</p>
				<img src={akutIllustrationImage} alt="Orion Hero Image" />
				<p>Hitta din terapeut!</p>
			</div>
		</div>
	);
};

export default Hero;
