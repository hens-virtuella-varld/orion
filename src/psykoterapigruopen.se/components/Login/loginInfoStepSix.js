const loginInfoStepSix = () => {
	return (
		<div>
			<div>
				<h2>Andra detaljer</h2>
				<h3>Var god fyll i information nedan</h3>
				<label>Pris</label>
				<input type="text" placeholder="Skriv ditt pris per timme här" />
				<h2>
					Erbjuder du rabatterat pris för studenter, arbetslösa och pensionärer
					med 20%?{" "}
				</h2>
				<button>Ja</button>
				<button>Nej</button>
			</div>
			<div>
				<div>
					<input type="checkbox" />
					<div>
						Jag intygar att jag är godkänd och legitimerad psykoterapeut och jag
						kan uppvisa ett intyg/diplom på anmaning.
					</div>
				</div>
				<div>
					<input type="checkbox" />
					<div>
						Jag är medveten om att jag som legitimerad psykoterapeut är skyldig
						att vara ansluten till vårdgivarregistret, för att få bedriva
						psykoterapi.
					</div>
				</div>
				<div>
					<input type="checkbox" />
					<div>
						Jag godkänner att Psykoterapigruppen Orion äger rätten att redigera
						och ta bort min presentation från sidan.
					</div>
				</div>
				<div>
					<input type="checkbox" />
					<div>
						I enlighet med GDPR godkänner även du att Psykoterapigruppen Orion
						behandlar dina personuppgifter i syfte att kunna visa dig på vår
						hemsida och andra kanaler, utbetala lön/fakturor samt för att kunna
						bedriva dokumentation utifrån de rättsliga förpliktelser som åligger
						verksamheten.
					</div>
				</div>
			</div>
		</div>
	);
};

export default loginInfoStepSix;
