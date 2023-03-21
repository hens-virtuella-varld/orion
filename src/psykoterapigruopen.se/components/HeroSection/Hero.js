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
								Hitta rätt terapeut för dina behov med Psykoterapigruppen Orion.
								Ange din plats och önskad terapityp för att hitta kvalificerade
								proffs i ditt område. Med vår omfattande katalog och
								användarrecensioner kan du fatta ett informerat beslut. Ta
								första steget mot läkning och starta din sökning idag.
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
