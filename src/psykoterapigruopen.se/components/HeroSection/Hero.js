import bubblesImage from "../../assets/orion-bubbles-new.svg";
import huggingBrainImage from "../../assets/hugging-brain-new.svg";
import akutIllustrationImage from "../../assets/orion-akut-illustration.svg";
import arrowBig from "../../assets/orion-arrow-bigger.svg";
import heroCSS from "./hero.module.css";

const Hero = ({
	sectionOneHandleClick,
	sectionTwohandleClick,
	sectionOneScroll,
}) => {
	return (
		<div className={heroCSS.heroContainer}>
			<div className={heroCSS.topHeroOuter}>
				<div className={heroCSS.topHero}>
					<div>
						<img
							src={bubblesImage}
							alt="Orion Hero"
							className={heroCSS.bubbleImg}
						/>
						<div className={heroCSS.topHeroText}>
							<p>
								Här hittar du en psykoterapeut som passar just dig och dina
								behov.   Du kan själv filtrera i de olika filtren för att göra
								det lättare. Om du känner dig osäker eller har svårt att välja
								kan du kontakta oss för en kostnadsfri konsultation, så att vi
								genom en kortare intervju på ca 10 minuter kan hjälpa dig att
								välja ut ett par psykoterapeuter som kan passa just dig och det
								du vill arbeta med.
							</p>
						</div>
					</div>
					<img src={huggingBrainImage} alt="Orion Hero" />
				</div>
				<img
					src={arrowBig}
					alt=""
					className={heroCSS.arrowBigger}
					onClick={sectionOneHandleClick}
				/>
			</div>
			<div className={heroCSS.lowerHero} ref={sectionOneScroll}>
				<div className={heroCSS.lowerHeroInner}>
					<div className={heroCSS.lowerHeroTextContainer}>
						<h2>Om det är brottom </h2>
						<p>Kontakta psykiatrisk akutmottagning eller ring 112.</p>
						<p>Mind självmordslinje, chatt via mind.se eller ring 90101.</p>
					</div>
					<div>
						<img src={akutIllustrationImage} alt="Orion Hero" />
					</div>
				</div>
				<p className={heroCSS.lowerHeroLowerText}>Hitta din terapeut!</p>
				<img
					src={arrowBig}
					alt=""
					className={heroCSS.arrowBigger}
					onClick={sectionTwohandleClick}
				/>
			</div>
		</div>
	);
};

export default Hero;
