import LoginInfoStepThreeCss from "./loginInfoStepThree.module.css";

const loginInfoStepThree = () => {
	return (
		<div className={LoginInfoStepThreeCss.container}>
			<h2 className={LoginInfoStepThreeCss.title}>Titel och information</h2>
			<div className={LoginInfoStepThreeCss.subtitleWrapper}>
				<h3>Jag är</h3>
			</div>
			<div className={LoginInfoStepThreeCss.choicesContainer}>
				<div className={LoginInfoStepThreeCss.choice}>
					<input type="checkbox" />
					<p>Leg. Psykoterapeut</p>
				</div>
				<div className={LoginInfoStepThreeCss.choice}>
					<input type="checkbox" />
					<p>Leg. Psykolog</p>
				</div>
			</div>
			<div className={LoginInfoStepThreeCss.introInput}>
				<h3>Om mig</h3>
				<input
					type="textarea"
					className={LoginInfoStepThreeCss.textArea}
					placeholder="Beskriv dig själv kortfattat, för att ge en personlig bild/beskrivning av dig som människa.
(Max 400 tecken, inkl blanksteg) 
"
				/>
				<div>
					<div className={LoginInfoStepThreeCss.questionsSelection}>
						<div>
							<div
								className={`${LoginInfoStepThreeCss.btnPoint} ${LoginInfoStepThreeCss.selected}`}
							></div>
							<div className={LoginInfoStepThreeCss.btnPoint}></div>
							<div className={LoginInfoStepThreeCss.btnPoint}></div>
							<div className={LoginInfoStepThreeCss.btnPoint}></div>
							<div className={LoginInfoStepThreeCss.btnPoint}></div>
						</div>
						<button className={LoginInfoStepThreeCss.btnNextQuestion}>
							Nästa fråga
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepThree;
