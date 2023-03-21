
import LoginInfoStepThreeCss from "./loginInfoStepThree.module.css";


const loginInfoStepThree = () => {
	return (
		<div className={loginInfoStepThreeCss.container}>
			<h2 className={loginInfoStepThreeCss.title}>Titel och information</h2>
			<div className={loginInfoStepThreeCss.subtitleWrapper}>
				<h3>Jag är</h3>
			</div>
			<div className={loginInfoStepThreeCss.choicesContainer}>
				<div className={loginInfoStepThreeCss.choice}>
					<input type="checkbox" />
					<p>Leg. Psykoterapeut</p>
				</div>
				<div className={loginInfoStepThreeCss.choice}>
					<input type="checkbox" />
					<p>Leg. Psykolog</p>
				</div>
			</div>

			<div>
				<h3>Om mig</h3>
				<input
					type="textarea"
					className={LoginInfoStepThreeCss.textArea}

					placeholder="Beskriv dig själv kortfattat, för att ge en personlig bild/beskrivning av dig som människa.
(Max 400 tecken, inkl blanksteg) 
"
				/>
				<div>
					<div className={loginInfoStepThreeCss.questionSelection}>
						<div>
							<div
								className={`${loginInfoStepThreeCss.btnPoint} ${loginInfoStepThreeCss.selected}`}
							></div>
							<div className={loginInfoStepThreeCss.btnPoint}></div>
							<div className={loginInfoStepThreeCss.btnPoint}></div>
							<div className={loginInfoStepThreeCss.btnPoint}></div>
							<div className={loginInfoStepThreeCss.btnPoint}></div>
						</div>
						<button className={loginInfoStepThreeCss.btnNextQuestion}>
							Nästa fråga
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepThree;
