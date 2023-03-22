import LoginInfoStepSixCss from "./loginInfoStepSix.module.css";

const loginInfoStepSix = () => {
	return (
		<div className={LoginInfoStepSixCss.container}>
			<div>
				<h2 className={LoginInfoStepSixCss.title}>Andra detaljer</h2>
				<div className={LoginInfoStepSixCss.columnWrapper}>
					<div
						className={`${LoginInfoStepSixCss.column} ${LoginInfoStepSixCss.leftColumn}`}
					>
						<h3 className={LoginInfoStepSixCss.subtitle}>
							Var god fyll i information nedan
						</h3>
						<div className={LoginInfoStepSixCss.question}>
							<label>Pris</label>
							<input type="text" placeholder="Skriv ditt pris per timme här" />
						</div>
						<div className={LoginInfoStepSixCss.question}>
							<h4>
								Erbjuder du rabatterat pris för studenter, arbetslösa och
								pensionärer med 20%?
							</h4>
							<div className={LoginInfoStepSixCss.btnWrapper}>
								<button>Ja</button>
								<button>Nej</button>
							</div>
						</div>
					</div>

					<div
						className={`${LoginInfoStepSixCss.column} ${LoginInfoStepSixCss.rightColumn}`}
					>
						<div className={`${LoginInfoStepSixCss.checkItem}`}>
							<input type="checkbox" />
							<p>
								Jag intygar att jag är godkänd och legitimerad psykoterapeut och
								jag kan uppvisa ett intyg/diplom på anmaning.
							</p>
						</div>
						<div className={`${LoginInfoStepSixCss.checkItem}`}>
							<input type="checkbox" />
							<p>
								Jag är medveten om att jag som legitimerad psykoterapeut är
								skyldig att vara ansluten till vårdgivarregistret, för att få
								bedriva psykoterapi.
							</p>
						</div>
						<div className={`${LoginInfoStepSixCss.checkItem}`}>
							<input type="checkbox" />
							<p>
								Jag godkänner att Psykoterapigruppen Orion äger rätten att
								redigera och ta bort min presentation från sidan.
							</p>
						</div>
						<div className={`${LoginInfoStepSixCss.checkItem}`}>
							<input type="checkbox" />
							<p>
								I enlighet med GDPR godkänner även du att Psykoterapigruppen
								Orion behandlar dina personuppgifter i syfte att kunna visa dig
								på vår hemsida och andra kanaler, utbetala lön/fakturor samt för
								att kunna bedriva dokumentation utifrån de rättsliga
								förpliktelser som åligger verksamheten.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepSix;
